import { vi } from "vitest";
import "./jest.init.js";
import "./setupTests";

// Provide Jest globals compatibility
(globalThis as any).jest = vi;
