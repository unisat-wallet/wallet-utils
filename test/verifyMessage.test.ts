import { expect } from "chai";
import { verifyMessage } from "../src";

describe("verifyMessage", function () {
  it("correct signature", async function () {
    const result = await verifyMessage(
      "026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac",
      "hello world~",
      "G6nd7IqQaU8kxNbUDCnGLf+lA5ZxJ9TVlNOoNSuQ6j1yD1lG/Y25h01yT7SNxW56IuGNRX8Eu4baQYzhU78Wa0o="
    );
    expect(result).eq(true);
  });

  it("incorrect signature", async function () {
    const result = await verifyMessage(
      "026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac",
      "hello world2~",
      "G6nd7IqQaU8kxNbUDCnGLf+lA5ZxJ9TVlNOoNSuQ6j1yD1lG/Y25h01yT7SNxW56IuGNRX8Eu4baQYzhU78Wa0o="
    );
    expect(result).eq(false);
  });
});
