import React from "react"
import { exportExcellent } from "../../utils/export"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFileExport,
  faFileCsv,
  faFileExcel,
} from "@fortawesome/free-solid-svg-icons"
import { Menu, Tooltip } from "@mantine/core"
import { Button } from "@mantine/core"

const ExportTableButton = ({ tableElement }: any, { tableName }: any) => {
  return (
    <div>
      <Menu
        control={
          <Tooltip label="Export table" openDelay={500} withArrow>
            <Button compact>
              <FontAwesomeIcon icon={faFileExport} />
              <span>Export</span>
            </Button>
          </Tooltip>
        }
        zIndex={1100}
      >
        <Menu.Label>Export table</Menu.Label>
        <Menu.Item
          icon={<FontAwesomeIcon icon={faFileCsv} />}
          onClick={() =>
            exportExcellent(tableElement, "csv", tableName, tableName)
          }
        >
          Download CSV
        </Menu.Item>
        <Menu.Item
          icon={<FontAwesomeIcon icon={faFileExcel} />}
          onClick={() =>
            exportExcellent(tableElement, "xlsx", tableName, tableName)
          }
        >
          Download XLSX
        </Menu.Item>
        <Menu.Item
          icon={<FontAwesomeIcon icon={faFileExcel} />}
          onClick={() =>
            exportExcellent(tableElement, "xls", tableName, tableName)
          }
        >
          Download XLS
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default ExportTableButton
