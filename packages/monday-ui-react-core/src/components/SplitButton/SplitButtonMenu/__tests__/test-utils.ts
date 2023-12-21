let rafSpy: jest.SpyInstance;

export const mockRequestAnimationFrame = () => {
  rafSpy = jest.spyOn(window, "requestAnimationFrame").mockImplementation((cb: FrameRequestCallback) => {
    cb(0);
    return 0;
  });
};

export const restoreRequestAnimationFrameMock = () => {
  rafSpy.mockRestore();
};
