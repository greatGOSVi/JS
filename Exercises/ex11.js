// los canguros empiezan en las posiciones x1 y x2 y avanzan respectivamente v1 y v2 con cada salto. Si los canguros en algun momento se
//  encuentran en la misma posicion al mismo tiempo retorna YES, sino, retorna NO.

function kangaroo(x1, v1, x2, v2) {
    let pos1 = x1;
    let pos2 = x2;

    if (x1 > x2 && v1 > v2) {
        return "NO";
    } else if (x2 > x1 && v2 > v1) {
        return "NO";
    } else {
        for (let i=0; i<1000; i++) {
            pos1 += v1;
            pos2 += v2;
            if (pos1 === pos2) {
                return "YES";
            }
        }
        return "NO";
    }
}