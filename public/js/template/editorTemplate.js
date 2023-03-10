export const editorTemplate = `
<div id="main-ui" class="editor-ui">
			<div id="header">
				<div id="global-info">
					<div id="selectors">
						<select id="scene-selector">
							<option>--scene--</option>
						</select>
						<div id='btn-reload-scene-list' class="ui-button" title="reload scene list">
							<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
								class="svg-button">
								<g>
									<path d="M 12 20 A 8 8 0 1 1 20 12  M 21 9 L 20 12 L 18 10" />
								</g>
							</svg>
						</div>
						<select id="frame-selector">
							<option>--frame--</option>
						</select>
						<div id="camera-selector">
							<span>Camera</span>
							<div id="camera-list">
							</div>
						</div>

					</div>

					<select id="object-selector">
						<option>--object--</option>
					</select>

					<text id="box"></text>
					<text id="ref-obj"></text>
				</div>

				<div id="buttons">
					<div id="use-previous-frame">使用上一帧</div>
					<input type="checkbox" id="if-default-use" name="if-default-use">
					<label for="if-default-use" id="if-default-use-label" value="y">启用预设</label>
					<select id="attribute-selector" disabled="true">
						<option value=""></option>
						<option value="0">0</option>
						<option value="1">1</option>
					</select>
					<select id="category-selector" disabled="true">
						<option value="">--category--</option>
					</select>
					<div id="dynamic-buttons-placeholder">
					</div>

					<div id="static-buttons">
						<div id="changed-mark" class="ui-button">
							<div id='save-button'>
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<path
											d="M 4 4 L 18 4 L 20 6 L 20 20 L 4 20 Z M 8 4 h 8 v 2 h -8 z M 6 10 h 12 V 18 h -12 z ">
										</path>
									</g>
								</svg>
								<div id="save-feedback">
									<div id="save-triangle"></div>
									<div id="save-content">保存成功</div>
								</div>
							</div>
							<div id="changed-world-list-wrapper">
								<div> All modified frames, click to save them all</div>
								<div id='changed-world-list'></div>
							</div>
						</div>

						<div id="log-button" class="ui-button">
							<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" id="log-svg"
								class="svg-button">
								<g>
									<circle cx=12 cy=12 r=4 />
								</g>
							</svg>
						</div>

						<div id="config-button" class="ui-button">
							<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
								class="svg-button">
								<g>
									<circle cx=12 cy=7 r=1 />
									<circle cx=12 cy=12 r=1 />
									<circle cx=12 cy=17 r=1 />
								</g>
							</svg>
						</div>
					</div>
				</div>


			</div>

			<div id="content">
				<div id="container">
					<div id='select-box'></div>
					<svg width="100%" height="100%" id="main-view-svg">
						<g id="grid-lines-wrapper"></g>
					</svg>
				</div>

				<div id="floating-things">
					<div id="floating-labels" class="non-selectable"></div>
					<div id="obj-editor">

						<div class="obj-editor-row">
							<div id="label-copy" class="ui-button" title="copy (C-c)">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<rect x="8" y="8" width="12" height="12" />
										<polyline points="8 16 4 16 4 4 16 4 16 8 " />
									</g>
								</svg>
							</div>
							<div id="label-paste" class="ui-button" title="auto adjust">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<circle cx=12 cy=12 r=4 />
										<rect x=10 y=16 width=4 height=4 />
										<polyline points='12 3 12 6' />
										<polyline points='3 12 6 12' />
										<polyline points='18 12 21 12' />
										<polyline points='5 5 8 8' />
										<polyline points='18 5 15 8' />
									</g>
								</svg>
							</div>
							<div id="label-batchedit" class="ui-button" title="edit multiple instances">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<rect x="4" y="4" width="8" height="8" />
										<rect x="4" y="12" width="8" height="8" />
										<rect x="12" y="4" width="8" height="8" />

									</g>
								</svg>
							</div>

							<div id="label-trajectory" class="ui-button" title="trajectory">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<path d="M 4 4 C 20 4, 4 20, 20 20" />

									</g>
								</svg>
							</div>

							<div id="label-highlight" class="ui-button" title="focus">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<circle cx="10" cy="10" r="7" />
										<polyline points="15 15 20 20" />
										<polyline points="10 6 10 14" />
										<polyline points="6 10 14 10" />
									</g>
								</svg>
							</div>
							<div id="label-edit" class="ui-button" title="edit">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<polyline points="12 4 12 20" />
										<polyline points="4 9 12 9" />
										<polyline points="8 5 12 9 8 13" />
										<polyline points="20 15 12 15" />
								</svg>
							</div>
							<div id="label-rotate" class="ui-button" title="reverse direction (g)">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<rect x=8 y=8 width=8 height=8 />

										<polyline points="12 12 12 21" />
										<polyline points="10 19 12 21 14 19" />

										<polyline points="12 12 12 3" stroke-dasharray="1" />
										<polyline points="10 5 12 3 14 5" stroke-dasharray="1" />
									</g>
								</svg>
							</div>

							<div id="label-del" class="ui-button" title="delete (Del)">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<path
											d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
										</path>
									</g>
								</svg>
							</div>

							<div id="label-more" class="ui-button">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<g>
											<circle cx="7" cy="12" r="0.5"></circle>
											<circle cx="12" cy="12" r="0.5"></circle>
											<circle cx="17" cy="12" r="0.5"></circle>
										</g>
									</g>
								</svg>

								<div id="object-dropdown-menu" class="non-selectable">
									<div class="menu-item" id="cm-modify-obj-type">
										<div class="menu-item-icon"></div>
										<div class="menu-item-text">同步对象类型和属性</div>
									</div>
									<div class="menu-item" id="cm-modify-obj-size">
										<div class="menu-item-icon"></div>
										<div class="menu-item-text">同步对象大小</div>
									</div>

									<div class="menu-item menu-seperator"></div>
									<div class="menu-item" id="cm-auto-ann-background">
										<div class="menu-item-icon"></div>
										<div class="menu-item-text">在后台自动显示</div>
									</div>
									<div class="menu-item" id="cm-interpolate-background">
										<div class="menu-item-icon"></div>
										<div class="menu-item-text">在背景中插值</div>
									</div>

									<div class="menu-item menu-seperator"></div>
									<div class="menu-item" id="cm-select-as-ref">
										<div class="menu-item-icon"></div>
										<div class="menu-item-text">复制/选择 作为参考</div>
									</div>
									<div class="menu-item menu-seperator"></div>
									<div class="menu-item" id="cm-change-id-to-ref">
										<div class="menu-item-icon"></div>
										<div class="menu-item-text">Change ID to Ref</div>
									</div>
									<div class="menu-item" id="cm-change-id-to-ref-in-scene">
										<div class="menu-item-icon"></div>
										<div class="menu-item-text">Change ID to Ref in all frames</div>
									</div>
									<div class="menu-item menu-seperator"></div>
									<div class="menu-item" id="cm-follow-ref">
										<div class="menu-item-icon"></div>
										<div class="menu-item-text">跟随参考</div>
									</div>

									<div class="menu-item" id="cm-sync-followers">
										<div class="menu-item-icon"></div>
										<div class="menu-item-text">同步跟随者</div>
									</div>


									<div class="menu-item" id="cm-follow-static-objects">
										<div class="menu-item-icon"></div>
										<div class="menu-item-text">跟随静态对象</div>
									</div>

									<div class="menu-item menu-seperator"></div>
									<div class="menu-item" id="cm-delete-obj">
										<div class="menu-item-icon"></div>
										<div class="menu-item-text">删除此对象（在所有帧中）</div>
									</div>
								</div>
							</div>
						</div>


						<div class="obj-editor-row">
							<select title="category" id="object-category-selector"></select>

							<input title="tracking id" list="obj-ids-of-scene" id="object-track-id-editor" type="text"
								size="5" placeholder="track id"></input>
							<datalist id="obj-ids-of-scene"></datalist>
							<div id="label-gen-id" class="ui-button" title="generate ID">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<rect x="6" y="6" width="12" height="12" />
									</g>
								</svg>
							</div>
						</div>

						<div class="obj-editor-row">
							<div id="attr-editor">
								<input title="attribute" id="attr-input" type="text" size="10" placeholder="attribute">
								<div id="attr-selector">
								</div>
							</div>
						</div>

					</div>
				</div>



				<div id="main-box-editor-wrapper"></div>
				<div id="batch-box-editor">
					<div id="batch-box-editor-header"></div>
					<div id="batch-box-editor-group"></div>
				</div>



			</div>

			<div id="context-menu-wrapper" class="non-selectable">
				<div id="context-menu">


					<div class="menu-item" id="cm-new">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">新建车辆属性</div>
						<div class="menu-item-arrow menu-item-icon">
							<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
								class="svg-menu-icon">
								<g>
									<path d="M12 8 L 18 12 L 12 16Z"></path>
								</g>
							</svg>
						</div>
						<div id="new-submenu">
						</div>
					</div>

					<div class="menu-item" id="cm-paste" title="hold shift key to disable auto-adjust">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">粘贴</div>
					</div>

					<div class="menu-item menu-seperator"></div>

					<div class="menu-item" id="cm-goto">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">跳转</div>
						<div class="menu-item-arrow menu-item-icon">
							<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
								class="svg-menu-icon">
								<g>
									<path d="M12 8 L 18 12 L 12 16Z"></path>
								</g>
							</svg>
						</div>
						<div id="goto-submenu">
							<div class="menu-item" id="cm-prev-frame">
								<div class="menu-item-icon"></div>
								<div class="menu-item-text">上一帧 (3)</div>
							</div>

							<div class="menu-item" id="cm-next-frame">
								<div class="menu-item-icon"></div>
								<div class="menu-item-text">下一帧 (4)</div>
							</div>

							<div class="menu-item" id="cm-first-frame">
								<div class="menu-item-icon"></div>
								<div class="menu-item-text">第一帧</div>
							</div>
							<div class="menu-item" id="cm-last-frame">
								<div class="menu-item-icon"></div>
								<div class="menu-item-text">最后一帧</div>
							</div>


							<div class="menu-item menu-seperator"></div>
							<div class="menu-item" id="cm-prev-object">
								<div class="menu-item-icon"></div>
								<div class="menu-item-text">上一个对象 (1)</div>
							</div>

							<div class="menu-item" id="cm-next-object">
								<div class="menu-item-icon"></div>
								<div class="menu-item-text">下一个对象 (2)</div>
							</div>


							<div class="menu-item menu-seperator"></div>
							<div class="menu-item" id="cm-go-to-10hz">
								<div class="menu-item-icon"></div>
								<div class="menu-item-text">全10hz场景</div>
							</div>

							<div class="menu-item" id="cm-go-to-full-2hz">
								<div class="menu-item-icon"></div>
								<div class="menu-item-text">全2Hz场景</div>
							</div>

							<div class="menu-item" id="cm-go-to-2hz">
								<div class="menu-item-icon"></div>
								<div class="menu-item-text">2Hz场景</div>
							</div>
						</div>
					</div>

					<div class="menu-item" id="cm-play">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">播放</div>
						<div class="menu-item-arrow menu-item-icon">
							<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
								class="svg-menu-icon">
								<g>
									<path d="M12 8 L 18 12 L 12 16Z"></path>
								</g>
							</svg>
						</div>
						<div id="play-submenu">
							<div class="menu-item" id="cm-play-2fps">
								<div class="menu-item-text">2 FPS</div>
							</div>
							<div class="menu-item" id="cm-play-10fps">
								<div class="menu-item-text">10 FPS</div>
							</div>
							<div class="menu-item" id="cm-play-20fps">
								<div class="menu-item-text">20 FPS</div>
							</div>
							<div class="menu-item" id="cm-play-50fps">
								<div class="menu-item-text">50 FPS</div>
							</div>
						</div>
					</div>

					<div class="menu-item" id="cm-pause">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">暂停</div>
					</div>

					<div class="menu-item" id="cm-stop">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">Stop</div>
					</div>

					<div class="menu-item menu-seperator"></div>


					<div class="menu-item" id="cm-save">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">保存</div>
					</div>

					<div class="menu-item" id="cm-reload">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">重新加载当前帧</div>
					</div>

					<div class="menu-item" id="cm-reload-all">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">全部重新加载</div>
					</div>

					<div class="menu-item menu-seperator"></div>

					<div class="menu-item" id="cm-reset-view">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">重置视图</div>
					</div>

					<div class="menu-item menu-seperator"></div>
					<div class="menu-item" id="cm-show-frame-info">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">帧信息</div>
					</div>

					<div class="menu-item menu-seperator"></div>
					<div class="menu-item" id="cm-show-stat">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">统计</div>
					</div>

					<div class="menu-item" id="cm-check-scene">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">Check</div>
					</div>

				</div>

				<div id="object-context-menu">
					<div class="menu-item" id="cm-modify-obj-type">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">同步对象类型和属性</div>
					</div>
					<div class="menu-item" id="cm-modify-obj-size">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">同步对象大小</div>
					</div>

					<div class="menu-item menu-seperator"></div>
					<div class="menu-item" id="cm-edit-multiple-instances">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">编辑多个实例</div>
					</div>
					<div class="menu-item" id="cm-auto-ann-background">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">在后台自动显示</div>
					</div>
					<div class="menu-item" id="cm-interpolate-background">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">在背景中插值</div>
					</div>

					<div class="menu-item" id="cm-show-trajectory">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">显示轨迹</div>
					</div>

					<div class="menu-item menu-seperator"></div>
					<div class="menu-item" id="cm-select-as-ref">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">复制/选择 作为参考</div>
					</div>

					<div class="menu-item" id="cm-follow-ref">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">跟随参考</div>
					</div>

					<div class="menu-item" id="cm-sync-followers">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">同步追随者</div>
					</div>


					<div class="menu-item" id="cm-follow-static-objects">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">跟随静态对象</div>
					</div>

					<div class="menu-item menu-seperator"></div>
					<div class="menu-item" id="cm-delete">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text">删除</div>
					</div>

					<div class="menu-item" id="cm-delete-obj">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">删除此对象（在所有帧中）</div>
					</div>
				</div>

				<div id="box-editor-context-menu">

					<div class="menu-item" id="cm-select-all">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text"><u>S</u>elect all</div>
					</div>

					<div class="menu-item" id="cm-select-all-previous">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text">Select all previous</div>
					</div>

					<div class="menu-item" id="cm-select-all-next">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text">Select all next</div>
					</div>



					<div class="menu-item menu-seperator"></div>
					<div class="menu-item" id="cm-delete-empty-boxes">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text">Delete empty boxes</div>
					</div>



					<div class="menu-item menu-seperator"></div>

					<div class="menu-item" id="cm-delete">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text"><u>D</u>elete</div>
					</div>

					<div class="menu-item" id="cm-delete-intersected-boxes">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text">Delete intersected boxes</div>
					</div>

					<div class="menu-item" id="cm-interpolate">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text">Int<u>e</u>rpolate</div>
					</div>

					<div class="menu-item" id="cm-auto-annotate">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text"><u>A</u>uto annotate</div>
					</div>

					<div class="menu-item" id="cm-auto-annotate-wo-rotation">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text">Auto annotate (no rotation)</div>
					</div>


					<div class="menu-item" id="cm-fit">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">Fit</div>
						<div class="menu-item-arrow menu-item-icon">
							<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
								class="svg-menu-icon">
								<g>
									<path d="M12 8 L 18 12 L 12 16Z"></path>
								</g>
							</svg>
						</div>
						<div id="cm-fit-submenu">
							<div class="menu-item" id="cm-fit-size">
								<div class="menu-item-text">Size</div>
							</div>
							<div class="menu-item" id="cm-fit-position">
								<div class="menu-item-text">Position</div>
							</div>
							<div class="menu-item" id="cm-fit-rotation">
								<div class="menu-item-text">Rotation</div>
							</div>
							<div class="menu-item" id="cm-fit-moving-direction">
								<div class="menu-item-text">Moving direction</div>
							</div>
							<div class="menu-item menu-seperator"></div>
							<div class="menu-item" id="cm-fit-top">
								<div class="menu-item-text">Top</div>
							</div>
							<div class="menu-item" id="cm-fit-bottom">
								<div class="menu-item-text">Bottom</div>
							</div>
							<div class="menu-item" id="cm-fit-left">
								<div class="menu-item-text">Left</div>
							</div>
							<div class="menu-item" id="cm-fit-right">
								<div class="menu-item-text">Right</div>
							</div>
							<div class="menu-item" id="cm-fit-front">
								<div class="menu-item-text">Front</div>
							</div>
							<div class="menu-item" id="cm-fit-rear">
								<div class="menu-item-text">Rear</div>
							</div>
						</div>
					</div>

					<div class="menu-item" id="cm-reverse-direction">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">Reverse heading direction</div>
					</div>

					<div class="menu-item" id="cm-reset-roll-pitch">
						<div class="menu-item-icon"></div>
						<div class="menu-item-text">Reset roll & pitch</div>
					</div>

					<div class="menu-item" id="cm-finalize">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text"><u>F</u>inalize</div>
					</div>

					<div class="menu-item" id="cm-reload">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text">Reload</div>
					</div>


					<div class="menu-item menu-seperator"></div>

					<div class="menu-item" id="cm-goto-this-frame">
						<div class="menu-item-text"><u>G</u>o to this frame</div>
					</div>


					<div class="menu-item" id="cm-sync-size">
						<div class="menu-item-text">Sync size to all</div>
					</div>

					<div class="menu-item" id="cm-follow-static-objects">
						<div class="menu-item-text">Follow static objects</div>
					</div>

					<div class="menu-item menu-seperator"></div>


					<div class="menu-item" id="cm-show-trajectory">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text"><u>T</u>rajectory</div>
					</div>

					<div class="menu-item" id="cm-check">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text">Check</div>
					</div>

				</div>



				<div id="box-editor-manager-context-menu">
					<div class="menu-item" id="cm-increase-box-editor">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text">More object instance</div>
					</div>

					<div class="menu-item" id="cm-decrease-box-editor">
						<div class="menu-item-icon">
						</div>
						<div class="menu-item-text">less object instance</div>
					</div>

				</div>
			</div>

			<div id="config-wrapper">
				<div id="config-menu" class="non-selectable">

					<div class="menu-nonclickable-item" id="cfg-theme">
						<span>主题</span>
						<div class="cfg-widget-group">
							<select type="checkbox" id="cfg-theme-select" class="cfg-widget">
								<option value="dark" selected>黑暗</option>
								<option value="light" selected>明亮</option>
							</select>
						</div>
					</div>
					<div class="menu-nonclickable-item" id="cfg-point-size">
						<span>点大小</span>
						<div class='cfg-widget-group'>
							<div id='cfg-increase-size' class='menu-button'>+</div>
							<div id='cfg-decrease-size' class='menu-button'>-</div>
						</div>
					</div>
					<div class="menu-nonclickable-item" id="cfg-point-brightness">
						<span>点亮度</span>
						<div class='cfg-widget-group'>
							<div id='cfg-increase-brightness' class='menu-button'>+</div>
							<div id='cfg-decrease-brightness' class='menu-button'>-</div>
						</div>
					</div>

					<div class="menu-nonclickable-item" id="cfg-hide-circle-ruler">
						<span>隐藏圆尺</span>
						<div class="cfg-widget-group">
							<input type="checkbox" id="cfg-hide-circle-ruler-checkbox" class="cfg-widget">
						</div>
					</div>


					<div class="menu-nonclickable-item" id="cfg-hide-box">
						<span>隐藏框</span>
						<div class="cfg-widget-group">
							<input type="checkbox" id="cfg-hide-box-checkbox" class="cfg-widget">
						</div>
					</div>

					<div class="menu-nonclickable-item" id="cfg-hide-id">
						<span>隐藏ID</span>
						<div class="cfg-widget-group">
							<input type="checkbox" id="cfg-hide-id-checkbox" class="cfg-widget">
						</div>
					</div>

					<div class="menu-nonclickable-item" id="cfg-hide-category">
						<span>隐藏类别</span>
						<div class="cfg-widget-group">
							<input type="checkbox" id="cfg-hide-category-checkbox" class="cfg-widget">
						</div>
					</div>

					<div class="menu-nonclickable-item" id="cfg-color-points">
						<span>点颜色</span>
						<div class="cfg-widget-group">
							<select type="checkbox" id="cfg-color-points-select" class="cfg-widget">
								<option value="mono" selected>白色</option>
								<option value="intensity" selected>高亮</option>
							</select>
						</div>
					</div>

					<div class="menu-nonclickable-item" id="cfg-color-object">
						<span>对象颜色</span>
						<div class="cfg-widget-group">
							<select id="cfg-color-object-scheme" class="cfg-widget">
								<option value="category">按类别</option>
								<option value="id">按id</option>
								<option value="no">不组合上色</option>
							</select>

						</div>
					</div>

					<div class="menu-nonclickable-item" id="cfg-menu-batch-mode-inst-number">
						<span>批处理模式最大箱数</span>
						<div class="cfg-widget-group">
							<select title="instance number" id="cfg-batch-mode-inst-number" class="cfg-widget">
								<option value=10>10</option>
								<option value=20 selected>20</option>
								<option value=30>30</option>
								<option value=40>40</option>
							</select>

						</div>
					</div>


					<div class="menu-nonclickable-item" id="cfg-coordinate-system">
						<span>坐标系</span>
						<div class="cfg-widget-group">
							<select title="coordinate system" id="cfg-coordinate-system-select" 　 class="cfg-widget">
								<option value="utm">GPS/UTM</option>
								<option value="lidar" selected>LiDAR</option>
							</select>
						</div>
					</div>

					<div class="menu-nonclickable-item" id="cfg-auto-rotate-xy">
						<span>自动旋转 X/Y（横滚/俯仰）</span>
						<div class="cfg-widget-group">
							<input type="checkbox" id="cfg-auto-rotate-xy-checkbox" class="cfg-widget">
						</div>
					</div>

					<div class="menu-nonclickable-item" id="cfg-auto-update-interpolated-boxes">
						<span>自动更新插入框</span>
						<div class="cfg-widget-group">
							<input type="checkbox" id="cfg-auto-update-interpolated-boxes-checkbox" class="cfg-widget">
						</div>
					</div>


					<div class="menu-item menu-seperator"></div>

					<div class="menu-item" id="cfg-data">
						<span>数据设置</span>
						<div class="menu-item-arrow menu-item-icon">
							<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
								class="svg-menu-icon">
								<g>
									<path d="M12 8 L 18 12 L 12 16Z"></path>
								</g>
							</svg>
						</div>

						<div id="cfg-data-submenu">

							<div class="menu-nonclickable-item" id="cfg-data-preload">
								<div class="menu-item-text">Preload</div>
								<div class="cfg-widget-group">
									<input type="checkbox" id="cfg-data-preload-checkbox" class="cfg-widget">
								</div>
							</div>

							<div class="menu-nonclickable-item" id="cfg-data-aux-lidar">
								<div class="menu-item-text">Auxiliary LiDAR</div>
								<div class="cfg-widget-group">
									<input type="checkbox" id="cfg-data-aux-lidar-checkbox" class="cfg-widget">
								</div>
							</div>

							<div class="menu-nonclickable-item" id="cfg-data-radar">
								<div class="menu-item-text">Radar</div>
								<div class="cfg-widget-group">
									<input type="checkbox" id="cfg-data-radar-checkbox" class="cfg-widget">
								</div>
							</div>

							<div class="menu-nonclickable-item" id="cfg-data-filter-points">
								<div class="menu-item-text">Hide points</div>
								<div class="cfg-widget-group">
									<input type="checkbox" id="cfg-data-filter-points-checkbox" class="cfg-widget">
									<span> z-threshold</span>
									<input id="cfg-data-filter-points-z" class="cfg-widget">
								</div>
							</div>

						</div>
					</div>


					<div class="menu-item" id="cfg-experimental">
						<span>实验的</span>
						<div class="menu-item-arrow menu-item-icon">
							<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
								class="svg-menu-icon">
								<g>
									<path d="M12 8 L 18 12 L 12 16Z"></path>
								</g>
							</svg>
						</div>

						<div id="cfg-experimental-submenu">
							<div class="menu-nonclickable-item" id="cfg-calib-camera-LiDAR">
								<div class="menu-item-text">Camera-LiDAR calibration</div>
								<div class='cfg-widget-group'>
									<div id='cfg-start-calib' class='menu-button'>start</div>
									<div id='cfg-show-calib' class='menu-button'>result</div>
									<div id='cfg-stop-calib' class='menu-button'>stop</div>
								</div>

							</div>

							<div class="menu-item" id="cfg-crop-scene">
								<div class="menu-item-text">Crop scene</div>
							</div>
						</div>
					</div>

					<div class="menu-item menu-seperator"></div>
					<div class="menu-item" id="cfg-show-log">
						<span>显示日志</span>
					</div>

					<div class="menu-item" id="cfg-take-screenshot">
						<span>截取屏幕截图</span>
					</div>

					<div class="menu-item" id="cfg-help">
						<a href="https://github.com/naurril/SUSTechPOINTS/blob/dev-auto-annotate/README_guide.md"
							target="_blank">Help</a>
					</div>
				</div>
			</div>

			<div id="object-track-wrapper" class="popup-window-wrapper" tabindex="-1">
				<div id="view" class="non-selectable">
					<div id="header">
						<span id="title">
							Trajectory
						</span>

						<div id="buttons">
							<div id="btn-restore" class="ui-button" title="restore">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<rect x=6 y=6 width=12 height=12></rect>
									</g>
								</svg>
							</div>
							<div id="btn-maximize" class="ui-button" title="maximize">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<rect x=4 y=4 width=16 height=16></rect>
									</g>
								</svg>
							</div>
							<div id="btn-exit" class="ui-button" title="exit">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<path d="M4 4 L 20 20 M 20 4 L 4 20"></path>
									</g>
								</svg>
							</div>
						</div>
					</div>

					<svg id="object-track-svg" viewbox="0 0 1000 1000" preserveAspectRatio="xMinYMax meet">
						<g id="svg-arrows"></g>
						<g id="svg-scaler"></g>
					</svg>
				</div>
			</div>

			<div id="info-wrapper" class="popup-window-wrapper" tabindex='-1'>
				<div id="view">
					<div id="header">
						<span id="title">Info</span>
						<div id="buttons">
							<div id="btn-restore" class="ui-button" title="restore">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<rect x=6 y=6 width=12 height=12></rect>
									</g>
								</svg>
							</div>
							<div id="btn-maximize" class="ui-button" title="maximize">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<rect x=4 y=4 width=16 height=16></rect>
									</g>
								</svg>
							</div>
							<div id="btn-exit" class="ui-button" title="exit">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<path d="M4 4 L 20 20 M 20 4 L 4 20"></path>
									</g>
								</svg>
							</div>
						</div>
					</div>
					<div id="info-content"></div>
					<div id="info-bottom-buttons">
						<button id="btn-no">No</button>
						<button id="btn-yes">Yes</button>
					</div>
				</div>
			</div>

			<div id="crop-scene-wrapper" class="popup-window-wrapper" tabindex='-1'>
				<div id="view">
					<div id="header">
						<span id="title">Crop scene</span>
						<div id="buttons">
							<div id="btn-restore" class="ui-button" title="restore">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<rect x=6 y=6 width=12 height=12></rect>
									</g>
								</svg>
							</div>
							<div id="btn-maximize" class="ui-button" title="maximize">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<rect x=4 y=4 width=16 height=16></rect>
									</g>
								</svg>
							</div>
							<div id="btn-exit" class="ui-button" title="exit">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<path d="M4 4 L 20 20 M 20 4 L 4 20"></path>
									</g>
								</svg>
							</div>
						</div>
					</div>
					<div id="content">
						<div>
							<div><span>desc:</span><input id="scene-desc" /></div>
							<div><span>start time:</span><input id="scene-start-time" /></div>
							<div><span>seconds:</span><input id="scene-seconds" /></div>

							<div>
								<button id="btn-generate">generate</button>
							</div>

							<div id="log">

							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="log-wrapper" class="popup-window-wrapper" tabindex='-1'>
				<div id="view">
					<div id="header">
						<span id="title">Output</span>
						<div id="buttons">

							<div id="btn-clear" class="ui-button" title="clear logs">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<circle cx=12 cy=12 r=8 />
										<polyline points="7 7 17 17" />
									</g>
								</svg>
							</div>
							<div id="btn-exit" class="ui-button" title="exit">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<path d="M4 4 L 20 20 M 20 4 L 4 20"></path>
									</g>
								</svg>
							</div>
						</div>
					</div>
					<div id="tabs">
						<div id="tab-log" class="tab-button tab-selected">Logs</div>
						<div id="tab-error" class="tab-button">Errors</div>
					</div>
					<div id="content-logs">
					</div>
					<div id="content-errors">
					</div>
				</div>
			</div>

			<div id="move-handle-wrapper">
			</div>

			<div id="dialog-wrapper" tabindex='-1'>
				<div id="dialog-main">
					<div id="dialog-header">
						<span id="dialog-title">警告</span>
						<div id="dialog-buttons">
							<div id="dialog-exit" class="ui-button" title="exit">
								<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
									class="svg-button">
									<g>
										<path d="M4 4 L 20 20 M 20 4 L 4 20"></path>
									</g>
								</svg>
							</div>
						</div>
					</div>
					<div id="dialog-content">
						<div id="dialog-text">
							清空当前标注, 应用上一帧标注, 确定吗?
						</div>
						<div id="dialog-answer">
							<div id="btn-no" class="dialog-button">取消</div>
							<div id="btn-yes" class="dialog-button">确定</div>
						</div>
					</div>
				</div>
			</div>
		</div>
`