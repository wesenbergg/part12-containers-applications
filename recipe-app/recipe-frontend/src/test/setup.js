// Add any global test setup here
import { expect, afterEach } from "../../$node_modules/vitest/dist/index.js";
import { cleanup } from "../../$node_modules/@testing-library/react/types/index.js";
import * as matchers from "../../$node_modules/@testing-library/jest-dom/types/matchers-standalone.js";

// Extend Vitest's expect with @testing-library/jest-dom matchers
expect.extend(matchers);

// Clean up after each test
afterEach(() => {
  cleanup();
});
