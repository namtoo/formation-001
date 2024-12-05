import React from 'react'

export default function CalcSubZoneWidth(linDiv,zoneWidth) {
    const linDivTable = linDiv.split(':')
    const totalRatio = linDivTable.reduce((acc,current)=> acc+Number(current),0)
    const results = []
    linDivTable.map((value,index)=>{
        const subZoneWidth = value * zoneWidth /totalRatio
        results.push(subZoneWidth)
    })
    return results
}
