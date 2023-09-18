import { test, describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import AdminRoll from "@/pages/onboarding/add-admin/index.vue";
import * as addNewAdmin from "@/api/admin"; // Import the API function to mock

describe("AdminRoll", () => {
  it("handles form submission correctly", async () => {
    // Mock the API response
    const mockResponseSuccess = {
      status: 201,
    };

    // Replace the addNewAdmin function with a spy
    const addNewAdminSpy = vi.spyOn(addNewAdmin, "addNewAdmin");

    // Define the behavior of the spy function
    addNewAdminSpy.mockImplementation(async (formData) => {
      // You can add assertions here to check if the formData is as expected
      expect(formData.first_name).toBe("John");
      expect(formData.last_name).toBe("Doe");
      expect(formData.phone).toBe("+233123456789");
      expect(formData.email).toBe("johndoe@example.com");
      expect(formData.role_id).toBe(2);

      return Promise.resolve(mockResponseSuccess);
    });

    // Mount the component
    const wrapper = mount(AdminRoll);

    // Wait for the component to update after mounting
    await wrapper.vm.$nextTick();

    // Simulate filling the form data
    wrapper.vm.formData.first_name = "John";
    wrapper.vm.formData.last_name = "Doe";
    wrapper.vm.formData.phone = "123456789";
    wrapper.vm.formData.email = "johndoe@example.com";
    wrapper.vm.formData.role_id = 2;

    // Trigger the form submission
    await wrapper.vm.handleSubmit();

    // Assert that the API function was called
    expect(addNewAdminSpy).toHaveBeenCalled();

    // Clean up the spy after the test
    addNewAdminSpy.mockRestore();
  });

  // ...
});
