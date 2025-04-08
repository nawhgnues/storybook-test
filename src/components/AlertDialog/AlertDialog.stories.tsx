import type { Meta, StoryObj } from "@storybook/react";

import { AlertDialog } from "./AlertDialog";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Component/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cancel: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 🔹 Step 1: Open modal
    const alertButton = canvas.getByRole("button", { name: /alert/i });
    await userEvent.click(alertButton);

    // 🔹 Step 2: Get dialog
    const dialog = await within(document.body).findByRole("alertdialog");

    // 🔹 Step 3: Assert cancel button is present
    const cancelButton = within(dialog).getByRole("button", {
      name: /cancel/i,
    });
    await expect(cancelButton).toBeInTheDocument();

    // 🔹 Step 4: Assert description text is visible
    await expect(
      within(dialog).getByText(
        /This action cannot be undone. This will permanently delete your account and remove your data from our servers/i
      )
    ).toBeInTheDocument();
  },
};
