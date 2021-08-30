import { basename, extname } from 'path';
import { parseContentType, parseContentTypeCharset } from '../index';

test(`test`, () =>
{

	expect(parseContentType(`Text/HTML;Charset="utf-8"`)).toMatchSnapshot();

	expect(parseContentTypeCharset(`Text/HTML;Charset="utf-8"`)).toMatchSnapshot();

});
