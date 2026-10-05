import { vi } from "vitest";

let rafSpy: ReturnType<typeof vi.spyOn>;

export const mockRequestAnimationFrame = () => {
  rafSpy = vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb: FrameRequestCallback) => {
    cb(0);
    return 0;
  });
};

export const restoreRequestAnimationFrameMock = () => {
  rafSpy.mockRestore();
};
