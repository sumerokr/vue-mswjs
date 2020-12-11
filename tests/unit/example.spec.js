import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

describe("HelloWorld.vue", () => {
  it("renders nothing when user is fetching", () => {
    const wrapper = mount(HelloWorld);

    expect(wrapper.text()).not.toContain("admin");
  });

  it("renders name when user is fetched", async () => {
    const wrapper = mount(HelloWorld);

    await delay(500);

    expect(wrapper.text()).toContain("admin");
  });
});
