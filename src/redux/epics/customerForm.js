import { ofType } from 'redux-observable';
import { mergeMap, switchMap, map, filter } from 'rxjs/operators';
import { merge, of } from 'rxjs'
import * as actionTypes from '../../actions/actionTypes'