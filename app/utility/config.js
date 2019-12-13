module.exports = {
    app: {
        prod: {
            port: 3000,
            domain: "http://localhost",
            db: {
                //server: '14.192.17.223',
                host: 'devopolis-public.cacmcg7ruluq.us-east-1.rds.amazonaws.com',
                database: 'fundopolisdev',
                user: 'devopolis',
                password: 'yy4CqcbiZLtFQyG5Vmcm',
                connectionLimit: 10,
                multipleStatements: true,
                waitForConnections: true,
                wait_timeout: 28800,
                connect_timeout: 10
                // port: 1433,
                // pool: {
                //     max: 100,
                //     min: 0,
                //     idleTimeoutMillis: 30000
                // },
                // options: {
                //     encrypt: false
                //     //trustedConnection: true
                // },
                // parseJSON: true
            }
        },
        dev:{
            port: 3000,
            domain: "http://localhost",
            db: {
                //server: '14.192.17.223',
                host: 'devopolis-public.cacmcg7ruluq.us-east-1.rds.amazonaws.com',
                database: 'fundopolisdev',
                user: 'devopolis',
                password: 'yy4CqcbiZLtFQyG5Vmcm',
                connectionLimit : 10,
                multipleStatements: true,
                waitForConnections : true,
                wait_timeout : 28800,
                connect_timeout :10
                // port: 1433,
                // pool: {
                //     max: 100,
                //     min: 0,
                //     idleTimeoutMillis: 30000
                // },
                // options: {
                //     encrypt: false
                //     //trustedConnection: true
                // },
                // parseJSON: true
            }
        }
    }
}