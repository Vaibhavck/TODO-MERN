import React from 'react';

function Test(props) {
    return (
        <div>
            <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
    <div className="row m-1 p-4">
        <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
                <i className="fa fa-check bg-primary text-white rounded p-2"></i>
                <u>My Todo-s</u>
            </div>
        </div>
    </div>
    <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
            <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div className="col">
                    <input className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new .." />
                </div>
                <div className="col-auto m-0 px-2 d-flex align-items-center">
                    <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">Due date not set</label>
                    <i className="fa fa-calendar my-2 px-1 text-primary btn due-date-button" data-toggle="tooltip" data-placement="bottom" title="Set a Due date"></i>
                    <i className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none" data-toggle="tooltip" data-placement="bottom" title="Clear Due date"></i>
                </div>
                <div className="col-auto px-0 mx-0 mr-2">
                    <button type="button" className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    </div>
    <div className="p-2 mx-4 border-black-25 border-bottom"></div>
    <div className="row m-1 p-3 px-5 justify-content-end">
        <div className="col-auto d-flex align-items-center">
            <label className="text-secondary my-2 pr-2 view-opt-label">Filter</label>
            <select className="custom-select custom-select-sm btn my-2">
                <option value="all" selected>All</option>
                <option value="completed">Completed</option>
                <option value="active">Active</option>
                <option value="has-due-date">Has due date</option>
            </select>
        </div>
        <div className="col-auto d-flex align-items-center px-1 pr-3">
            <label className="text-secondary my-2 pr-2 view-opt-label">Sort</label>
            <select className="custom-select custom-select-sm btn my-2">
                <option value="added-date-asc" selected>Added date</option>
                <option value="due-date-desc">Due date</option>
            </select>
            <i className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending"></i>
            <i className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending"></i>
        </div>
    </div>
    <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
            <div className="row px-3 align-items-center todo-item rounded">
                <div className="col-auto m-1 p-0 d-flex align-items-center">
                    <h2 className="m-0 p-0">
                        <i className="fa fa-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i>
                        <i className="fa fa-check-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
                    </h2>
                </div>
                <div className="col px-1 m-1 d-flex align-items-center">
                    <input type="text" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readonly value="Buy groceries for next week" title="Buy groceries for next week" />
                    <input type="text" className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value="Buy groceries for next week" />
                </div>
                <div className="col-auto m-1 p-0 px-3 d-none">
                </div>
                <div className="col-auto m-1 p-0 todo-actions">
                    <div className="row d-flex align-items-center justify-content-end">
                        <h5 className="m-0 p-0 px-2">
                            <i className="fa fa-pencil text-info btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Edit todo"></i>
                        </h5>
                        <h5 className="m-0 p-0 px-2">
                            <i className="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>
                        </h5>
                    </div>
                    <div className="row todo-created-info">
                        <div className="col-auto d-flex align-items-center pr-2">
                            <i className="fa fa-info-circle my-2 px-2 text-black-50 btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Created date"></i>
                            <label className="date-label my-2 text-black-50">28th Jun 2020</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-3 align-items-center todo-item rounded">
                <div className="col-auto m-1 p-0 d-flex align-items-center">
                    <h2 className="m-0 p-0">
                        <i className="fa fa-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i>
                        <i className="fa fa-check-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
                    </h2>
                </div>
                <div className="col px-1 m-1 d-flex align-items-center">
                    <input type="text" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readonly value="Renew car insurance" title="Renew car insurance" />
                    <input type="text" className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value="Renew car insurance" />
                </div>
                <div className="col-auto m-1 p-0 px-3">
                    <div className="row">
                        <div className="col-auto d-flex align-items-center rounded bg-white border border-warning">
                            <i className="fa fa-hourglass-2 my-2 px-2 text-warning btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Due on date"></i>
                            <h6 className="text my-2 pr-2">28th Jun 2020</h6>
                        </div>
                    </div>
                </div>
                <div className="col-auto m-1 p-0 todo-actions">
                    <div className="row d-flex align-items-center justify-content-end">
                        <h5 className="m-0 p-0 px-2">
                            <i className="fa fa-pencil text-info btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Edit todo"></i>
                        </h5>
                        <h5 className="m-0 p-0 px-2">
                            <i className="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>
                        </h5>
                    </div>
                    <div className="row todo-created-info">
                        <div className="col-auto d-flex align-items-center pr-2">
                            <i className="fa fa-info-circle my-2 px-2 text-black-50 btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Created date"></i>
                            <label className="date-label my-2 text-black-50">28th Jun 2020</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-3 align-items-center todo-item editing rounded">
                <div className="col-auto m-1 p-0 d-flex align-items-center">
                    <h2 className="m-0 p-0">
                        <i className="fa fa-square-o text-primary btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i>
                        <i className="fa fa-check-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
                    </h2>
                </div>
                <div className="col px-1 m-1 d-flex align-items-center">
                    <input type="text" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3 d-none" readonly value="Sign up for online course" title="Sign up for online course" />
                    <input type="text" className="form-control form-control-lg border-0 edit-todo-input rounded px-3" value="Sign up for online course" />
                </div>
                <div className="col-auto m-1 p-0 px-3 d-none">
                </div>
                <div className="col-auto m-1 p-0 todo-actions">
                    <div className="row d-flex align-items-center justify-content-end">
                        <h5 className="m-0 p-0 px-2 edit-icon">
                            <i className="fa fa-pencil text-info btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Edit todo"></i>
                        </h5>
                        <h5 className="m-0 p-0 px-2">
                            <i className="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>
                        </h5>
                    </div>
                    <div className="row todo-created-info">
                        <div className="col-auto d-flex align-items-center pr-2">
                            <i className="fa fa-info-circle my-2 px-2 text-black-50 btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Created date"></i>
                            <label className="date-label my-2 text-black-50">28th Jun 2020</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
}

export default Test;