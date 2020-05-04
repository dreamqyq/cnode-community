/**
 * topicList 请求参数
 */
export interface topicListParams {
  page: number;
  tag?: string;
  limit: number;
  mdrender?: string;
}

/**
 * 导航栏
 */
export interface NavItem {
  txt: string;
  url: string;
}

export enum TabEnum {
  share = "分享",
  ask = "问答",
  job = "招聘",
  good = "精华"
}

/**
 * 页面展示文章列表类型
 */
export interface topicListItem {
  avatarUrl: string;
  replyCount: number;
  visitCount: number;
  title: string;
  lastReplyAt: string;
  top: boolean;
  good: boolean;
  tab: TabEnum;
}

export interface Author {
  loginname: string;
  avatar_url: string;
}

/**
 * 首页文章列表response
 */
export interface topicListEntity {
  id: string;
  author_id: string;
  tab: TabEnum;
  content: string;
  title: string;
  last_reply_at: string;
  good: boolean;
  top: boolean;
  reply_count: number;
  visit_count: number;
  create_at: string;
  author: Author;
}
