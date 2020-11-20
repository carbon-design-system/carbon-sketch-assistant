import { resolve } from 'path'
import { testAssistant } from '@sketch-hq/sketch-assistant-utils'

import Assistant from '..'

test('carbon-design-system', async () => {
  const { violations, ruleErrors } = await testAssistant(
    resolve(__dirname, './artboards-layout.sketch'),
    Assistant,
  )
  expect(violations).toHaveLength(0)
  expect(ruleErrors).toHaveLength(0)
})
