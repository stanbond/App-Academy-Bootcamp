export const fetchBenches = (bounds) => (
    $.ajax({
        method: 'GET',
        url: 'api/benches',
        data: {bounds: bounds}
    })
);

export const createBench = (bench) => (
    $.ajax({
        method: 'POST',
        url: 'api/benches',
        data: {bench: bench}
    })
)