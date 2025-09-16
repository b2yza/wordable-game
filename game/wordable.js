let my_board = [[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0],
[0, 0, 0, 0, 0]]

window.onload = function () {
    draw_board(my_board);
}

function draw_board(board) {
    let board_html = generate_board_html(board);
    document.getElementById("board_container").innerHTML = board_html;
}

function generate_board_html(board) {
    let board_inner_html = "";
    for (let i = 0; i < board.length; i++) {

        let row_html = "<tr>"
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 0) {
                row_html += "<td class=\"emptyTile\"></td>";
            }
        }
        row_html += "</tr>";
        board_inner_html += row_html;
    }

    return `<table>${board_inner_html}</table>`;
}
