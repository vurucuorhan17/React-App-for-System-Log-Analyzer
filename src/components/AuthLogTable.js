import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";


function AuthLogTable(props) {
    
    const { loading,data } = useQuery(FETCH_ALL_AUTH_LOG);

    return (
        <div style={{ minHeight: 100 }}>
            <div className="container py-5">
                <header className="text-center text-black">
                    <h1 className="display-4">Auth Log </h1>
                </header>
                <div className="row py-5">
                    <div className="col-lg-10 mx-auto">
                        <div className="card rounded shadow border-0">
                            <div className="card-body p-5 bg-white rounded">
                                <div className="table-responsive">
                                    <table id="example" style={{ width: "100%" }} className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Time Stamp</th>
                                                <th>Log Detail</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <td>Loading...</td>
                                            ): (
                                                data && data.getAllAuthLog.map(log => (
                                                    <tr key={log.id}>
                                                        <td>{log.timeStamp}</td>
                                                        <td>{log.logDetail}</td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const FETCH_ALL_AUTH_LOG = gql`
 {
    getAllAuthLog {
        timeStamp
        logDetail
    }
 }
`;

export default AuthLogTable;