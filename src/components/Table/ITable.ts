export type TableProps = {
  dataSource: { [type: string]: any }
  columnsConfig: {
    title: string
    source: string
    render?: Function
  }
}
