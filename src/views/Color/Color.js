function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const Color = (WapperComponet) => {
    let colorRanDom = getRandomColor();
    return (props) => (
        <div style={{ color: colorRanDom }}>
            <WapperComponet {...props} />
        </div>)

}
export default Color
