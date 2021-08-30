
import MIMEType from 'whatwg-mimetype';

export function parseContentType(mimeType: string)
{
	return MIMEType.parse(mimeType)
}

export function parseContentTypeCharset(mimeType: string)
{
	return parseContentType(mimeType)?.parameters.get("charset")
}

export { MIMEType }

export default parseContentType
