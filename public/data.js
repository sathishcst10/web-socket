const allSuccsss = {
    "trackId": 259,
    "trackRefNo": 3,
    "trackUUID": "f5fc6248-da72-11eb-ad15-d0abd56d828d",
    "trackDiagnosticsPath": "",
    "trackImagePath": "commonImagePath",
    "capturedTimestamp": "2021-07-01T08:18:13.000+00:00",
    "status": "Success",
    "createdDate": "2022-02-16T04:17:00.000+00:00",
    "createdBy": "SYSTEM",
    "stationName": "STA-0",
    "updatedDate": null,
    "updatedBy": null,
    "message": "Barcode and dimensions captured Successfully",
    "barcode": {
        "barcodeId": 260,
        "barcodeRefNo": 4,
        "barcodeUUID": "f5f98c4e-da72-11eb-a7c5-d0abd56d828d",
        "barcodeDiagnosticsPath": "",
        "barcodeImagePath": "",
        "barcodeActualValue": null,
        "barcodeStartTimestamp": "2021-07-01T08:18:05.000+00:00",
        "barcodeEndTimestamp": "2021-07-01T08:18:25.000+00:00",
        "barcodeImage": null,
        "barcodeValues": [
            {
                "barcodeValueId": 261,
                "decodedValue": "85960261000347X42500417",
                "type": "1D",
                "frequency": 1,
                "refImagePath": "/path/to/dir",
                "valid": false
            }
        ]
    },
    "dimensions": {
        "dimensionsId": 262,
        "dimensionsRefNo": 1,
        "dimensionsUUID": "f9193f3c-da72-11eb-9be4-d0abd56d828d",
        "dimensionsDiagnosticsPath": "path/to/dir",
        "dimensionsImagePath": "save_data/images/210701/19/1_1_f9193f3c-da72-11eb-9be4-d0abd56d828d_19-18-12.jpg",
        "dimensionStartTimestamp": "2021-07-01T08:18:10.000+00:00",
        "dimensionEndTimestamp": "2021-07-01T08:18:12.000+00:00",
        "dimensionsImage": null,
        "dimensionsValue": {
            "dimensionsValueId": 263,
            "length": 295.7,
            "width": 192.1,
            "height": 106.3,
            "weight": null,
            "refImagePath": "save_data/images/210701/19/1_1_f9193f3c-da72-11eb-9be4-d0abd56d828d_19-18-12.jpg"
        }
    },
    "errorCode": null
}
const BarcodeFirst = {
    "trackId": 259,
    "trackRefNo": 3,
    "trackUUID": "f5fc6248-da72-11eb-ad15-d0abd56d828d",
    "trackDiagnosticsPath": "",
    "trackImagePath": "commonImagePath",
    "capturedTimestamp": "2021-07-01T08:18:13.000+00:00",
    "status": "Waiting",
    "createdDate": "2022-02-16T04:17:00.000+00:00",
    "createdBy": "SYSTEM",
    "stationName": "STA-0",
    "updatedDate": null,
    "updatedBy": null,
    "message": "Barcode Captured.",
    "barcode": {
        "barcodeId": 260,
        "barcodeRefNo": 4,
        "barcodeUUID": "f5f98c4e-da72-11eb-a7c5-d0abd56d828d",
        "barcodeDiagnosticsPath": "",
        "barcodeImagePath": "",
        "barcodeActualValue": null,
        "barcodeStartTimestamp": "2021-07-01T08:18:05.000+00:00",
        "barcodeEndTimestamp": "2021-07-01T08:18:25.000+00:00",
        "barcodeImage": null,
        "barcodeValues": [
            {
                "barcodeValueId": 261,
                "decodedValue": "85960261000347X42500417",
                "type": "1D",
                "frequency": 1,
                "refImagePath": "/path/to/dir",
                "valid": false
            }
        ]
    },
    "dimensions": null,
    "errorCode": null
}
const NoBarcode = {
    "trackId": 259,
    "trackRefNo": 11,
    "trackUUID": "36db8d0e-d35a-11eb-a063-d0abd56d828d",
    "trackDiagnosticsPath": "",
    "trackImagePath": "commonImagePath",
    "capturedTimestamp": "2021-06-22T07:33:22.000+00:00",
    "status": "Error",
    "createdDate": "2021-08-23T18:30:00.000+00:00",
    "createdBy": "SYSTEM",
    "stationName": "STA-0",
    "updatedDate": null,
    "updatedBy": null,
    "message": "No Barcode captured",
    "barcode": null,
    "dimensions": null,
    "errorCode": {
        "errorCodeId": 44,
        "errorCode": "VN7302",
        "description": "NoBarcodeData",
        "category": "Service Specific Error",
        "type": "Vision Integration",
        "priority": "P2",
        "hibernateLazyInitializer": {}
    }
}

const NoDimensions = {
    "trackId": 259,
    "trackRefNo": 3,
    "trackUUID": "f5fc6248-da72-11eb-ad15-d0abd56d828d",
    "trackDiagnosticsPath": "",
    "trackImagePath": "commonImagePath",
    "capturedTimestamp": "2021-07-01T08:18:13.000+00:00",
    "status": "Error",
    "createdDate": "2022-02-16T04:17:00.000+00:00",
    "createdBy": "SYSTEM",
    "stationName": "STA-0",
    "updatedDate": null,
    "updatedBy": null,
    "message": "Dimensions are not captured!",
    "barcode": {
        "barcodeId": 260,
        "barcodeRefNo": 4,
        "barcodeUUID": "f5f98c4e-da72-11eb-a7c5-d0abd56d828d",
        "barcodeDiagnosticsPath": "",
        "barcodeImagePath": "",
        "barcodeActualValue": null,
        "barcodeStartTimestamp": "2021-07-01T08:18:05.000+00:00",
        "barcodeEndTimestamp": "2021-07-01T08:18:25.000+00:00",
        "barcodeImage": null,
        "barcodeValues": [
            {
                "barcodeValueId": 261,
                "decodedValue": "85960261000347X42500417",
                "type": "1D",
                "frequency": 1,
                "refImagePath": "/path/to/dir",
                "valid": false
            }
        ]
    },
    "dimensions": null,
    "errorCode": null
}


const invalidBarcode = {
    "trackId": 259,
    "trackRefNo": 3,
    "trackUUID": "f5fc6248-da72-11eb-ad15-d0abd56d828d",
    "trackDiagnosticsPath": "",
    "trackImagePath": "commonImagePath",
    "capturedTimestamp": "2021-07-01T08:18:13.000+00:00",
    "status": "Invalid Barcode",
    "createdDate": "2022-02-16T04:17:00.000+00:00",
    "createdBy": "SYSTEM",
    "stationName": "STA-0",
    "updatedDate": null,
    "updatedBy": null,
    "message": "Invalid Barcode",
    "barcode": {
        "barcodeId": 260,
        "barcodeRefNo": 4,
        "barcodeUUID": "f5f98c4e-da72-11eb-a7c5-d0abd56d828d",
        "barcodeDiagnosticsPath": "",
        "barcodeImagePath": "",
        "barcodeActualValue": null,
        "barcodeStartTimestamp": "2021-07-01T08:18:05.000+00:00",
        "barcodeEndTimestamp": "2021-07-01T08:18:25.000+00:00",
        "barcodeImage": null,
        "barcodeValues": [
            {
                "barcodeValueId": 261,
                "decodedValue": "85960261000347X42500417",
                "type": "1D",
                "frequency": 1,
                "refImagePath": "/path/to/dir",
                "valid": false
            }
        ]
    },
    "dimensions": null,
    "errorCode": null
}


const invalidBarcodeWithDimension = {
    "trackId": 259,
    "trackRefNo": 3,
    "trackUUID": "f5fc6248-da72-11eb-ad15-d0abd56d828d",
    "trackDiagnosticsPath": "",
    "trackImagePath": "commonImagePath",
    "capturedTimestamp": "2021-07-01T08:18:13.000+00:00",
    "status": "Invalid Barcode",
    "createdDate": "2022-02-16T04:17:00.000+00:00",
    "createdBy": "SYSTEM",
    "stationName": "STA-0",
    "updatedDate": null,
    "updatedBy": null,
    "message": "Invalid Barcode",
    "barcode": {
        "barcodeId": 260,
        "barcodeRefNo": 4,
        "barcodeUUID": "f5f98c4e-da72-11eb-a7c5-d0abd56d828d",
        "barcodeDiagnosticsPath": "",
        "barcodeImagePath": "",
        "barcodeActualValue": null,
        "barcodeStartTimestamp": "2021-07-01T08:18:05.000+00:00",
        "barcodeEndTimestamp": "2021-07-01T08:18:25.000+00:00",
        "barcodeImage": null,
        "barcodeValues": [
            {
                "barcodeValueId": 261,
                "decodedValue": "85960261000347X42500417",
                "type": "1D",
                "frequency": 1,
                "refImagePath": "/path/to/dir",
                "valid": false
            }
        ]
    },
    "dimensions": {
        "dimensionsId": 262,
        "dimensionsRefNo": 1,
        "dimensionsUUID": "f9193f3c-da72-11eb-9be4-d0abd56d828d",
        "dimensionsDiagnosticsPath": "path/to/dir",
        "dimensionsImagePath": "save_data/images/210701/19/1_1_f9193f3c-da72-11eb-9be4-d0abd56d828d_19-18-12.jpg",
        "dimensionStartTimestamp": "2021-07-01T08:18:10.000+00:00",
        "dimensionEndTimestamp": "2021-07-01T08:18:12.000+00:00",
        "dimensionsImage": null,
        "dimensionsValue": {
            "dimensionsValueId": 263,
            "length": 295.7,
            "width": 192.1,
            "height": 106.3,
            "weight": null,
            "refImagePath": "save_data/images/210701/19/1_1_f9193f3c-da72-11eb-9be4-d0abd56d828d_19-18-12.jpg"
        }
    },
    "errorCode": null
}