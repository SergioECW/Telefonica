﻿{
    "Routes": [
        {
            "DownstreamPathTemplate": "/todos/{id}",
            "DownstreamScheme": "https",
            "DownstreamHostAndPorts": [
                {
                    "Host": "jsonplaceholder.typicode.com",
                    "Port": 443
                }
            ],
            "UpstreamPathTemplate": "/todos/{id}",
            "UpstreamHttpMethod": ["Put"]
        }
    ],
        "GlobalConfiguration": {
        "BaseUrl": "https://localhost:5000"
    }
}