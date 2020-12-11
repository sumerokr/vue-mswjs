import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders nothing when user is fetching", () => {
    const wrapper = mount(HelloWorld);

    expect(wrapper.text()).not.toContain("admin");
  });

  // whatwg fetch works out-of-the-box regardless second test
  // it("renders name when user is fetched", async () => {
  //   const wrapper = mount(HelloWorld);

  //   const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  //   await delay(500);

  //   expect(wrapper.text()).toContain("admin");
  // });
});
