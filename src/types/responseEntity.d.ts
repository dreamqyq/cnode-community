import { TabEnum } from "@/types/type";

export declare interface Author {
  loginname: string;
  avatar_url: string;
}

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

export declare interface TopicDetailEntity {
  id: string;
  author_id: string;
  tab: string;
  content: string;
  title: string;
  last_reply_at: string;
  good: boolean;
  top: boolean;
  reply_count: number;
  visit_count: number;
  create_at: string;
  author: Author;
  replies: Reply[];
  is_collect: boolean;
}

export declare interface Reply {
  id: string;
  author: Author;
  content: string;
  ups: any[];
  create_at: string;
  reply_id?: string;
  is_uped: boolean;
}

export declare interface RecentTopic {
  id: string;
  author: Author;
  title: string;
  last_reply_at: string;
}

export declare interface UserInfoEntity {
  loginname: string;
  avatar_url: string;
  githubUsername: string;
  create_at: string;
  score: number;
  recent_topics: RecentTopic[];
  recent_replies: RecentTopic[];
}
