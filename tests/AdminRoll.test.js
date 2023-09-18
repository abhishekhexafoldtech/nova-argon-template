import { test, describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import AdminRoll from "@/pages/onboarding/add-admin/index.vue";
import * as apiModule from "@/api/role"; // Import the module to mock

describe("AdminRoll", () => {
  it("fetches admin roles correctly", async () => {
    // Mock the API response
    const mockData = [
      { id: 1, name: "Role 1" },
      { id: 2, name: "Role 2" },
    ];

    // Use spyOn to mock the getRoleDropdownList function
    const getRoleDropdownListSpy = vi.spyOn(apiModule, "getRoleDropdownList");
    getRoleDropdownListSpy.mockResolvedValue({ data: { data: mockData } });

    // Mount the component
    const wrapper = mount(AdminRoll);

    // Wait for the component to update after the API call
    await wrapper.vm.$nextTick();

    // Assert that the getRoleDropdownList function was called
    expect(getRoleDropdownListSpy).toHaveBeenCalled();

    // Clean up the spy after the test
    getRoleDropdownListSpy.mockRestore();
  });
});
