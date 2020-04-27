/**
 * 解析entry[name]符号
 * @param {*} field 
 */
function parseField(field) {
    return field.split(/\[|\]/).filter(s => s)
}
/**
 * 基于parseField()结果查找属性
 * @param {*} req 
 * @param {*} field 
 */
function getField(req, field) {
    let val = req.body
    field.forEach(prop => {
        val = val[prop]
    });
    return val
}
exports.required = field => {
    field = parseField(field)
    return (req, res, next) => {
        if (getField(req, field)) {
            next()
        } else {
           // res.error(`${field.join(',')} is required`)
            res.redirect("back")
        }
    }
}
exports.lengthAbove = (field, len) => {
    field = parseField(field)
    return (req, res, next) => {
        if (getField(req, field).length > len) {
            next()
        } else {
            const fields = field.join(',')
            res.error(`${fileds} must have more than ${len} characters`)
            res.redirect('back')
        }
    }
}