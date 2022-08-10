import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError, retry } from "rxjs/operators";
import { LIST_DETAILS_REQUEST, DETAILS_REQUEST } from "../actions/actionTypes";
import {
  addListFailure,
  addListSuccess,
  addDetailsFailure,
  addDetailsSuccess,
} from "../actions/actionsCreators";
import { of } from "rxjs";

export const addListEpic = (action$) =>
  action$.pipe(
    ofType(LIST_DETAILS_REQUEST),
    switchMap(() =>
      ajax.getJSON(`http://localhost:7070/api/services`).pipe(
        map((o) => addListSuccess(o)),
        catchError((e) => of(addListFailure(e)))
      )
    )
  );

export const detailsEpic = (action$) =>
  action$.pipe(
    ofType(DETAILS_REQUEST),
    map((o) => o.payload.id),
    switchMap((o) =>
      ajax.getJSON(`http://localhost:7070/api/services/${o}`).pipe(
        retry(3),
        map((o) => addDetailsSuccess(o)),
        catchError((e) => of(addDetailsFailure(e)))
      )
    )
  );
