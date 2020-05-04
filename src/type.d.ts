/**
 * topicList 请求参数
 */
export declare interface TopicListParams {
  page: number;
  tag?: string;
  limit: number;
  mdrender?: string;
}

/**
 * 导航栏
 */
export declare interface NavItem {
  txt: string;
  url: string;
}

export declare enum TabEnum {
  share = "share",
  ask = "ask",
  job = "job",
  good = "good"
}

/**
 * 页面展示文章列表类型
 */
export declare interface TopicListItem {
  avatarUrl: string;
  replyCount: number;
  visitCount: number;
  title: string;
  lastReplyAt: string;
  top: boolean;
  good: boolean;
  tab: TabEnum;
}

export declare interface Author {
  loginname: string;
  avatar_url: string;
}

/**
 * 首页文章列表response
 */
export declare interface TopicListEntity {
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
