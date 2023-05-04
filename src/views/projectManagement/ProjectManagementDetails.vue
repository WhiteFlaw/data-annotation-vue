vue:
<template>
  <page-container has-search>
    <template slot="search">
      <el-form :model="searchForm" inline class="search-form">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="项目名称：">
              <el-select v-model="searchForm.projectId" filterable placeholder="按项目名称查询" @change="changeProject">
                <el-option v-for="o of projectList" :key="o.id" :value="o.id" :label="o.name" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12" style="text-align: end">
            <el-form-item>
              <el-button type="primary" @click="showEditProjectDialog()"> 编辑项目 </el-button>
              <el-button type="success" @click="showAssignToGroupDialog()"> 分配团队 </el-button>
              <el-button type="warning" @click="releaseProject()"> 释放项目 </el-button>
              <el-button type="danger" @click="deleteProject()"> 删除项目 </el-button>
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="客户名称：">
              <span> {{ projectInfoEditForm.customerName }} </span>
            </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="项目经理："> {{ projectInfoEditForm.managerNickname }} </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="项目类型："> {{ filterProjectType(projectInfoEditForm.type) }} </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="创建时间："> {{ projectInfoEditForm.createdTime }} </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="项目团队："> {{ projectInfoEditForm.teamsName }} </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="任务总数："> {{ projectInfoEditForm.taskCount }} </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="作业总数："> {{ projectInfoEditForm.workCount }} </el-form-item>
          </el-col>
          <el-col :md="12" :lg="8" :xl="6">
            <el-form-item label="项目状态："> {{ filterProjectStatus(projectInfoEditForm.status) }} </el-form-item>
          </el-col>

          <el-col>
            <el-form-item label="项目描述："> {{ projectInfoEditForm.description }} </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
    <template slot="content">
      <el-table :data="taskList" border v-loading="taskListLoading" stripe highlight-current-row :max-height="tableMaxHeight">
        <el-table-column type="selection" width="40" align="center" header-align="center" />
        <el-table-column label="任务ID" prop="id" align="center" header-align="center" min-width="70" />
        <el-table-column label="任务名称" prop="name" align="center" header-align="center" min-width="120" />
        <el-table-column label="团队进度(待领取/标注中/一检/二检/待验收)" prop="" align="center" header-align="center" min-width="160">
          <template slot-scope="scope">
            {{
              `${scope.row.toBeClaimedCount}/${scope.row.allAnnotatedCount}/${scope.row.firstInspectionCount}/${scope.row.secondInspectionCount}/${scope.row.atCount}`
            }}
          </template>
        </el-table-column>
        <el-table-column label="标注数据统计(2D/3D框数)" prop="" align="left" header-align="center" />
        <el-table-column label="驳回次数" prop="" align="center" header-align="center" min-width="70" />
        <el-table-column label="操作" align="left" header-align="center" fixed="right" width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="viewTaskDetail(scope.row)"> 查看 </el-button>
            <el-button type="text" @click="viewTaskLog(scope.row)"> 日志 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination-component :total="total" :page-index="pageIndex" :page-size="pageSize" @pagination="changePage" />
      <edit-project-dialog :visible.sync="editProjectDialogShow" :edit-form-data="projectInfoEditForm" />
      <assign-to-group-dialog :visible.sync="editProjectGroupDialogShow" :edit-form-data="projectGroupEditForm" />
    </template>
  </page-container>
</template>

<script>
import PageContainer from '@/components/PageContainer'
import PaginationComponent from '@/components/PaginationComponent'
import EditProjectDialog from '@/views/projectManagement/components/EditProjectDialog'
import AssignToGroupDialog from '@/views/projectManagement/components/AssignToGroupDialog'
import tableMixin from '@/utils/tableMixin'
import { getProjectsList, getProjectDetail, getProjectChildTaskDetail, releaseProjectData, deleteProjectsList } from '@/api/projectManagement'
import { projectStatusOptions, projectTypeOptions } from '@/api/common'
export default {
  name: 'ProjectManagementDetails',
  components: {
    PageContainer,
    PaginationComponent,
    EditProjectDialog,
    AssignToGroupDialog
  },
  mixins: [tableMixin],
  data() {
    return {
      searchForm: {
        projectId: ''
      },
      projectList: [],
      projectTypeList: [],
      projectStatusList: [],
      projectDetails: {},
      taskList: [],
      taskListLoading: false,
      editProjectDialogShow: false,
      editProjectGroupDialogShow: false,
      projectInfoEditForm: {},
      projectGroupEditForm: {},
      projectStatisticsData: {}
    }
  },
  computed: {},
  mounted() {
    this.initPage()
  },
  methods: {
    async initPage() {
      this.projectStatusList = [...projectStatusOptions]
      this.projectTypeList = [...projectTypeOptions]
      const res = await getProjectsList({
        customerId: null,
        managerId: null,
        pageIndex: 1,
        pageSize: 9999,
        projectName: '',
        status: null,
        teamId: null,
        type: null
      })
      if (res.success) {
        this.projectList = [...res.data.records]
      } else {
        this.$message.error(res.msg)
      }
      this.searchForm.projectId = Number(this.$route.query.id) || ''
      this.changeProject(this.searchForm.projectId)
      this.getTableMaxHeight()
    },
    // 获取项目详情
    async getProjectDetails(id) {
      if (id) {
        const res = await getProjectDetail(id)
        if (res.success) {
          this.projectDetails = { ...res.data }
          const teamIdArr = res.data.teamInfoList?.map((item) => item.teamId) ?? []
          const teamNameStr = res.data.teamInfoList?.map((item) => item.teamName)?.join('/') ?? ''
          this.projectInfoEditForm = {
            ...res.data,
            customerInfo: `${res.data.customerId}:${res.data.customerName}`,
            selectedDataRange: [res.data.startDate, res.data.endDate],
            selectedGroup: teamIdArr,
            managerInfo: `${res.data.managerId}:${res.data.managerNickname}`,
            oldTeamsId: teamIdArr,
            teamsName: teamNameStr
          }
          this.projectGroupEditForm = {
            projectId: res.data.id,
            teamIds: teamIdArr
          }
          this.projectStatisticsData = {
            toBeClaimedCount: res.data.toBeClaimedCount,
            allAnnotatedCount: res.data.allAnnotatedCount,
            firstInspectionCount: res.data.firstInspectionCount,
            secondInspectionCount: res.data.secondInspectionCount,
            atCount: res.data.atCount
          }
        } else {
          this.$message.error(res.msg)
        }
      }
    },
    // 切换项目名称，同时查询项目详情，子任务列表
    async changeProject(value) {
      await this.getProjectDetails(value)
      this.queryChildTasksData()
    },
    // 打开编辑项目弹窗
    showEditProjectDialog() {
      this.editProjectDialogShow = true
    },
    // 打开团队编辑弹窗
    showAssignToGroupDialog() {
      this.editProjectGroupDialogShow = true
    },
    // 释放项目
    releaseProject() {
      this.$confirm(`确定释放项目（${this.projectInfoEditForm.name}）吗?`, '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          releaseProjectData(this.projectInfoEditForm.id).then((res) => {
            if (res.success) {
              this.$message.success(res.msg)
              this.getProjectDetails(this.searchForm.projectId)
            } else {
              this.$$message.error(res.msg)
            }
          })
        })
        .catch(() => {
          this.$message.info('已取消删除操作')
        })
    },
    // 删除项目
    deleteProject() {
      this.$confirm(`确定删除项目（${this.projectInfoEditForm.name}）吗?`, '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          deleteProjectsList(this.projectInfoEditForm.id).then((res) => {
            if (res.success) {
              this.$message.success(res.msg)
              this.$router.replace({
                name: 'ProjectManagementDetails'
              })
            } else {
              this.$$message.error(res.msg)
            }
          })
        })
        .catch(() => {
          this.$message.info('已取消删除操作')
        })
    },
    // 获取子任务列表
    queryChildTasksData() {
      if (!this.searchForm.projectId) return false
      this.taskListLoading = true
      getProjectChildTaskDetail({ pageIndex: this.pageIndex, pageSize: this.pageSize, projectId: this.searchForm.projectId }).then((res) => {
        if (res.success) {
          res.data.records.forEach((item) => {
            item.toBeClaimedCount = this.projectStatisticsData.toBeClaimedCount
            item.allAnnotatedCount = this.projectStatisticsData.allAnnotatedCount
            item.firstInspectionCount = this.projectStatisticsData.firstInspectionCount
            item.secondInspectionCount = this.projectStatisticsData.secondInspectionCount
            item.atCount = this.projectStatisticsData.atCount
          })
          this.taskList = [...res.data.records]
        } else {
          this.$message.error(res.msg)
        }
        this.taskListLoading = false
      })
    },
    // 子任务列表分页切换
    changePage({ page, limit }) {
      this.pagIndex = page
      this.pageSize = limit
      this.queryChildTasksData()
    },
    viewTaskDetail(row) {
      console.log(row)
    },
    viewTaskLog(row) {
      console.log(row)
    },
    // 计算进度条
    format(val1, val2) {
      return () => {
        return (val1 || 0) + '/' + (val2 || 0) + '(' + (Number(val2) !== 0 ? Number((((val1 || 0) / val2) * 100).toFixed(2)) : 0) + '%)'
      }
    },
    // 过滤项目状态
    filterProjectStatus(statusId) {
      const value = this.projectStatusList.find((item) => item.id === statusId)
      return value?.name
    },
    // 过滤项目类型
    filterProjectType(typeId) {
      const value = this.projectTypeList.find((item) => item.id === typeId)
      return value?.name
    }
  }
}
</script>

<style></style>