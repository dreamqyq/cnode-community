import request from "@/utils/request";
import {
  TopicDetailParams,
  TopicListParams
} from "@/types/requestParamsInterface";
import { TopicDetailEntity, TopicListEntity } from "@/types/responseEntity";

export function getTopicLists(
  params?: TopicListParams
): Promise<Array<TopicListEntity>> {
  return request.get("topics", {
    params
  });
}

export function getTopicDetail(
  topicId: string | undefined,
  params?: TopicDetailParams
): Promise<TopicDetailEntity> {
  topicId = topicId === undefined ? "" : topicId;
  return request.get(`topic/${topicId}`, {
    params
  });
}
