/**
 * A function that checks whether the given data can get visualized by the tablelike table CBM.
 * @param data the data given by CBM loader
 * @returns {number} compatibility number
 */
export default function isCompatible(data) {
    if (data && Array.isArray(data['_fields']) && Array.isArray(data['rows'])) {
        // iterate through all fields
        for (let i = 0; i < data['_fields'].length; i++) {
            const field = data['_fields'][i];
            if (typeof(field) !== 'string') return 0;
            // iterate through all rows
            for (let j = 0; j < data['rows'].length; j++) {
                const row = data['rows'][j];
                if (typeof(row[field]) !== 'undefined' &&
                    typeof(row[field]) !== 'string' &&
                    typeof(row[field]) !== 'number' &&
                    typeof(row[field]) !== 'boolean') return 0;
            }
        }
        return 2;
    } else {
        return 0;
    }
}
