import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders nothing when user is fetching", () => {
    const wrapper = mount(HelloWorld);

    expect(wrapper.text()).not.toContain("admin");
  });

  // try to remove this comment. Tests will be fixed!
  // it("renders name when user is fetched", async () => {
  //   const wrapper = mount(HelloWorld);

  //   const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  //   await delay(500);

  //   expect(wrapper.text()).toContain("admin");
  // });
});
