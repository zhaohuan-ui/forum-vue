module.exports = {

  title: '论坛',

  subTitle: '',

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * 按键小图标配置
   */
  DELETE_ICON: 'el-icon-delete',
  UPDATE_ICON: 'el-icon-edit',
  CREATE_ICON: 'el-icon-edit-outline',
  SEARCH_ICON: 'el-icon-search',
  START_ICON: 'el-icon-circle-check',
  STOP_ICON: 'el-icon-circle-close',
  CHECK_ICON: 'el-icon-check',
  CLOSE_ICON: 'el-icon-refresh',
  PLUS_ICON: 'el-icon-circle-plus-outline',
  REFRESH_ICON: 'el-icon-refresh',
  DOWNLOAD_ICON: 'el-icon-download',
  LOADING_ICON: 'el-icon-loading',
  AIM_ICON: 'el-icon-aim',
  LOGGER_ICON: 'el-icon-notebook-2',
  UPLOAD_ICON: 'el-icon-upload2',
  ASSIGN_ICON: 'el-icon-connection',
  TOP_ICON: 'el-icon-top',
  VIEW_ICON: 'el-icon-view',

  menuButtonTypes: {
    create: {
      value: 'create',
      label: '添加',
      tag_type: 'success'
    },
    delete: {
      value: 'delete',
      label: '删除',
      tag_type: 'danger'
    },
    update: {
      value: 'update',
      label: '编辑',
      tag_type: 'primary'
    },
    disable: {
      value: 'disable',
      label: '禁用',
      tag_type: 'danger'
    },
    enable: {
      value: 'enable',
      label: '启用',
      tag_type: 'success'
    },
    map: {
      value: 'map',
      label: '映射 | 关联 | 分配',
      tag_type: ''
    },
    export: {
      value: 'export',
      label: '导出',
      tag_type: 'info'
    }
  }
}
