import request from "@/utils/request";
import { TopicListEntity, TopicListParams } from "@/type";

export function getTopicLists(
  params?: TopicListParams
): Promise<Array<TopicListEntity>> {
  return request.get("topics", {
    params
  });
}
