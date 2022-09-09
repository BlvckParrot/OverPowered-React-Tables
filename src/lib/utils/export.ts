/**
 * !dát odkaz na knihovnu
 * Funkce Function dowloads table in selected format using ExcellentExport library
 * @param {Object} tableElement table ref
 * @param {String} filename name of the file to download
 * @param {String} format file format("xls", "xlsx", "csv")
 */
 export const exportExcellent = (tableElement: HTMLInputElement, format: string, filename: string, sheetName: string) => {
    var downloadLink: HTMLAnchorElement
    downloadLink = document.createElement("a")
    document.body.appendChild(downloadLink)
  
    let options = {
      anchor: downloadLink,
      format: format,
      filename: filename ? filename : "Exported table",
    }
    let sheet = [
      {
        name: sheetName ? sheetName : "Sheet 1", // Name of excel sheet
        from: {
          table: tableElement,
        },
        //TODO Opravdu any?
        fixValue: (value: any) => {
            console.log(typeof value)
          //Replace br tag with new line
          let fixedval = value.replace(/<br>/gi, "\n")
          //Remove HTML
          fixedval = fixedval.replace(/(<([^>]+)>)/gi, "")
          //Format numbers
          fixedval = fixedval.replace(/(\d+)\s(?=\d{3}(\D|$))/g, "$1")
          if (isNumeric(fixedval)) {
            //Format for numbers {t: n(number), v: value}
            fixedval = { t: "n", v: Number(fixedval) }
          }
          return fixedval
        },
      },
    ]
    //LAZY LOADING (DYNAMIC IMPORT)
    import("excellentexport").then((ExcellentExport) => {
      //TODO Vymyslet lépe..
      // @ts-ignore
      ExcellentExport.convert(options, sheet)
      downloadLink.click()
      downloadLink.remove()
    })
  }

/**
 * !Přiřadit URL stackoverflow
 * ? Chtělo by to najít něco lepšího pro TS
 * Funkce zjistí zda je vstupní hodnota číslem
 * @param {String} str
 * @returns {Boolean}
 */
 const isNumeric = (str: any) => {
    if (typeof str != "string") return false // we only process strings!
    return (
      !isNaN(parseInt(str)) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str))
    ) // ...and ensure strings of whitespace fail
  }