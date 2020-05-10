import { Component, Vue } from "vue-property-decorator";
import { RecentTopic } from "@/types/responseEntity";

@Component
export default class VForMixin extends Vue {
  public mapListAndReturnElement(
    recentTopics: Array<RecentTopic>
  ): JSX.Element[] {
    return recentTopics.map(item => {
      return (
        <li>
          <router-link
            to={{
              name: "Article",
              params: {
                id: item.id,
                loginName: item.author.loginname
              }
            }}
          >
            {item.title}
          </router-link>
        </li>
      );
    });
  }
}
