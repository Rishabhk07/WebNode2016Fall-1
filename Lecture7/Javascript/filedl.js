/**
 * Created by championswimmer on 10/09/16.
 */

function saveFile(file, path, success) {
    // save file to "C:\\"+"path"
    // success(path, false)
    success(path, true);
}

function download (url, success) {
    //Downloads file from url;
    var downloadedFile = "downloaded file";
    success(downloadedFile);
    // if error
    //success(false);
}

function showImage(filePath) {
    //show the image in fileBytes on screen
}
var url = "http://myimage.com/img.jpg";
download(url, function (dlFile) {
    saveFile(dlFile, "./image.jpg", function (path, result) {
        if (result) {
            showImage(path)
        }
    })
});