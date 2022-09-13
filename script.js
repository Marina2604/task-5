const boardWrapper = document.getElementById('checkmate_board');

// boardWrapper.innerHTML = '<div class="white_square"> </div>';

for (let row = 0; row <= 7; row++) {
    // const element = array[index];

    /// רק בדיקה מדפיס שורה אחת
    // if (row % 2) {
    //     boardWrapper.innerHTML += '<div class="black_square"> </div>';
    // } else {
    //     boardWrapper.innerHTML += '<div class="white_square"> </div>';
    // }

    // if (row % 2) {
    //     for (let square = 0; square <= 7; square++) {
    //         if (square % 2) {
    //             boardWrapper.innerHTML += '<div class="white_square"> </div>';
    //         } else {
    //             boardWrapper.innerHTML += '<div class="black_square"> </div>';
    //         }
    //     }
    // } else {
    //     for (let square = 0; square <= 7; square++) {
    //         if (square % 2) {
    //             boardWrapper.innerHTML += '<div class="black_square"> </div>';
    //         } else {
    //             boardWrapper.innerHTML += '<div class="white_square"> </div>';
    //         }
    //     }
    // }



    for (let square = 0; square <= 7; square++) {

        if (row % 2) {

            if (square % 2) {
                boardWrapper.innerHTML += '<div class="white_square"> </div>';
            } else {
                boardWrapper.innerHTML += '<div class="black_square"> </div>';
            }

        } else {
            if (square % 2) {
                boardWrapper.innerHTML += '<div class="black_square"> </div>';
            } else {
                boardWrapper.innerHTML += '<div class="white_square"> </div>';
            }
        }


    }
}







