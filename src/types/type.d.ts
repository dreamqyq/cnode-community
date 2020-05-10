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
  id: string;
  loginName: string;
  avatarUrl: string;
  replyCount: number;
  visitCount: number;
  title: string;
  lastReplyAt: string;
  top: boolean;
  good: boolean;
  tab: TabEnum;
}
