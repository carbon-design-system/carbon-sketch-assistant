import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'
import CoreAssistant from '@sketch-hq/sketch-core-assistant'

const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: 'carbon-design-system',
      rules: [],
      config: {
        rules: {
          '@sketch-hq/sketch-core-assistant/artboards-layout': {
            active: true,
            layouts: [
              {
                columnWidth: 64,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 24,
                numberOfColumns: 16,
                rowHeightMultiplication: 0,
                totalWidth: 1536
              },
              {
                columnWidth: 48,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 16,
                numberOfColumns: 16,
                rowHeightMultiplication: 0,
                totalWidth: 1280
              },
              {
                columnWidth: 32,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 16,
                numberOfColumns: 16,
                rowHeightMultiplication: 0,
                totalWidth: 1024
              },
              {
                columnWidth: 48,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 16,
                numberOfColumns: 8,
                rowHeightMultiplication: 0,
                totalWidth: 640
              },
              {
                columnWidth: 48,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 0,
                numberOfColumns: 4,
                rowHeightMultiplication: 0,
                totalWidth: 320
              },
              {
                columnWidth: 48,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 280,
                numberOfColumns: 16,
                rowHeightMultiplication: 0,
                totalWidth: 1280
              },
              {
                columnWidth: 32,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 272,
                numberOfColumns: 16,
                rowHeightMultiplication: 0,
                totalWidth: 1024
              },
              {
                columnWidth: 64,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 272,
                numberOfColumns: 8,
                rowHeightMultiplication: 0,
                totalWidth: 768
              },
              {
                columnWidth: 16,
                drawHorizontal: false,
                drawHorizontalLines: false,
                drawVertical: true,
                gutterHeight: 0,
                gutterWidth: 32,
                guttersOutside: true,
                horizontalOffset: 272,
                numberOfColumns: 8,
                rowHeightMultiplication: 0,
                totalWidth: 384
              },
            ]
          },

          '@sketch-hq/sketch-core-assistant/artboards-grid': {
            active: true,
            grids: [
              { "gridBlockSize": 8, "thickLinesEvery": 0 }
            ]
          },

          '@sketch-hq/sketch-core-assistant/library-layer-styles-allowed-libraries': {
            "active": true,
            "libraries": ["Carbon Design System (White theme)", "Carbon Design System (Gray 10 theme)", "Carbon Design System (Gray 90 theme)", "Carbon Design System (Gray 100 theme)", "IBM Design Language v2", "IBM Icons (16px, 20px)", "IBM Icons (24px, 32px)"]
          },

          '@sketch-hq/sketch-core-assistant/library-text-styles-allowed-libraries': {
            "active": true,
            "libraries": ["Carbon Design System (White theme)", "Carbon Design System (Gray 10 theme)", "Carbon Design System (Gray 90 theme)", "Carbon Design System (Gray 100 theme)", "IBM Design Language v2"]
          },

          '@sketch-hq/sketch-core-assistant/name-pattern-groups': {
            "active": false,
            "allowed": [],
            "forbidden": ['^Group$'],
          },

          '@sketch-hq/sketch-core-assistant/layer-styles-no-dirty': {
            "active": false,
          },

          '@sketch-hq/sketch-core-assistant/text-styles-no-dirty': {
            "active": false,
          },

          '@sketch-hq/sketch-core-assistant/fills-no-disabled': {
            "active": false,
          },

          '@sketch-hq/sketch-core-assistant/borders-no-disabled': {
            "active": false,
          },

          '@sketch-hq/sketch-core-assistant/shadows-no-disabled': {
            "active": false,
          },

          '@sketch-hq/sketch-core-assistant/inner-shadows-no-disabled': {
            "active": false,
          },

          '@sketch-hq/sketch-core-assistant/layers-no-loose': {
            "active": false,
          },

          '@sketch-hq/sketch-core-assistant/groups-no-empty': {
            "active": false,
          },

          '@sketch-hq/sketch-core-assistant/groups-no-redundant': {
            "active": false,
          },



        },
      },
    }
  },
]

export default assistant
