import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLanguage, localeToCode } from "./constans/language";
import { l } from "./dictionaries/dictionary";
import { rootPages } from "./dictionaries/root-pages";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const url = request.nextUrl.clone();
  const response = NextResponse.next();

  if (rootPages.includes(pathname.replace("/en/", ""))) {
    return NextResponse.redirect(new URL("/404", request.url));
  }

  if (pathname.startsWith("/en/")) {
    const pathWithoutLocale = pathname.replace("/en/", "");
    const segments = pathWithoutLocale.split("/");

    const firstSegment = segments[0];
    const hasSubPath = segments.length > 1;

    if (rootPages.includes(firstSegment) && hasSubPath) {
      return NextResponse.redirect(new URL("/404", request.url));
    }
  }

  if (pathname.startsWith("/.well-known")) {
    return response;
  }
  if (pathname.startsWith("/favicon.ico")) {
    return response;
  }

  if (pathname.startsWith("/robots.txt")) {
    return response;
  }

  if (pathname.includes("/api/")) {
    return response;
  }

  if (pathname.includes("/fonts/")) {
    return response;
  }

  if (pathname.includes("/images/")) {
    return response;
  }

  if (pathname.includes("/videos/")) {
    return response;
  }
  if (pathname.includes("/")) {
    return response;
  }

  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/static/") ||
    pathname.startsWith("/image/")
  ) {
    return NextResponse.next();
  }

  if (pathname.indexOf("/images/") > -1) {
    return NextResponse.next();
  }

  const language = request.cookies.get("lang")?.value || defaultLanguage.locale;
  const locale = localeToCode(language);

  if (pathname.startsWith("/en")) {
    const p = pathname.split("/");
    const rest = p.slice(3);
    url.pathname = locale + pathname;
    // let newPath = detectPath("en", pathname);
    const p2 = l("en", "/en" + (p[2] ? "/" + p[2] : ""));
    const x = new URL(
      p2 + (rest?.length > 0 ? "/" + rest.join("/") : ""),
      request.url
    );
    const r = NextResponse.rewrite(x);
    r.cookies.set("lang", "en-US");
    return r;
  } else {
    // let newPath = detectPath("tr", pathname);
    const r = NextResponse.rewrite(
      new URL("/tr" + request.nextUrl.pathname, request.url)
    );
    r.cookies.set("lang", "tr-TR");
    return r;
  }
}

// const detectPath = (language: string, path: string): string => {
//   return "";
// };

export const config = {
  name: "locale-dangerirect",
};
