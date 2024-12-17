import React from 'react'

export default function CalcSubZoneLength(linDiv,zoneLength,dividerThickness){
    const linDivTable = linDiv.split(':')
    const subtractedLength = (linDivTable.length - 1) * dividerThickness
    const remainingLength = zoneLength - subtractedLength
    const totalRatio = linDivTable.reduce((acc,current)=> acc+Number(current),0)
    const results = []
    linDivTable.map((value)=>{
        const subZoneLength = value * remainingLength /totalRatio
        results.push(subZoneLength)
    })
    return results
}
