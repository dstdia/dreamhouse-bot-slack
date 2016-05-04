## Salesforce-Powered Slack Bot for DreamHouse Sample App

1. Follow [these instructions](http://dreamhouse-site.herokuapp.com/installation/) to install the DreamHouse app in your Salesforce Developer Edition org

1. Create a connected app

1. Follow [these instructions](https://api.slack.com/bot-users) to create a bot user in Slack

1. Clone this repository

1. Install dependencies
    ```
    npm install
    ```

1. On the command line, define the environment variables used in your Node.js app. On a Mac:
    ```
    export SLACK_BOT_TOKEN=your_slack_bot_token
    export SF_CLIENT_ID=your_salesforce_connected_app_client_id
    export SF_CLIENT_SECRET=your_salesforce_connected_app_secret
    export SF_USER_NAME=salesforce_integration_user_name
    export SF_PASSWORD=salesforce_integration_user_password
    ```
    
1. Start the bot
    ```
    node server
    ```
    
1. In Slack, select your bot under Direct Messages, type Help to see what you can ask, and start chatting with your bot!