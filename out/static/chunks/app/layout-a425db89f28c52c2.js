(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[185],
	{
		7455: function (e, r, a) {
			Promise.resolve().then(a.bind(a, 4548)),
				Promise.resolve().then(a.t.bind(a, 2972, 23)),
				Promise.resolve().then(a.t.bind(a, 7151, 23)),
				Promise.resolve().then(a.t.bind(a, 7960, 23));
		},
		4548: function (e, r, a) {
			"use strict";
			a.d(r, {
				default: function () {
					return l;
				},
			});
			var n = a(7437),
				t = a(3145),
				o = a(7648),
				c = a(2265),
				s = a(5475),
				i = a(1365);
			function l() {
				let [e, r] = (0, c.useState)(!1),
					a = (0, s.usePathname)(),
					l = (e) => a === e,
					d = [
						{ href: "/", label: "Home" },
						{ href: "/gallery", label: "Gallery" },
						{ href: "/contact", label: "Contact" },
					];
				return (0, n.jsx)("header", {
					className:
						"bg-[var(--background)] sticky top-0 z-50 shadow-2xl border-b border-[var(--accent-primary)]",
					children: (0, n.jsxs)("nav", {
						className: "container mx-auto px-4 py-3",
						children: [
							(0, n.jsxs)("div", {
								className: "flex justify-between items-center",
								children: [
									(0, n.jsxs)(o.default, {
										href: "/",
										className: "flex items-center space-x-3",
										children: [
											(0, n.jsx)(t.default, {
												src: i.Z,
												alt: "Vicious Warfare Logo",
												width: 50,
												height: 50,
												className:
													"rounded-full border-2 border-[var(--accent-secondary)]",
											}),
											(0, n.jsx)("span", {
												className:
													"font-bold text-xl tracking-wider uppercase hidden sm:block text-[var(--foreground)]",
												children: "AstroMinchu",
											}),
										],
									}),
									(0, n.jsx)("div", {
										className: "hidden md:flex space-x-6",
										children: d.map((e) =>
											(0, n.jsx)(
												o.default,
												{
													href: e.href,
													className:
														"\n                  uppercase tracking-wider text-sm\n                  transition-all duration-300 ease-in-out\n                  hover:text-[var(--accent-secondary)]\n                  ".concat(
															l(e.href)
																? "text-[var(--accent-secondary)] font-bold"
																: "text-[var(--foreground)]",
															"\n                "
														),
													children: e.label,
												},
												e.href
											)
										),
									}),
									(0, n.jsx)("button", {
										className:
											"md:hidden p-2 rounded-md hover:bg-[var(--accent-primary)] transition",
										onClick: () => r(!e),
										"aria-label": "Toggle mobile menu",
										children: (0, n.jsx)("svg", {
											className: "w-6 h-6 text-[var(--foreground)]",
											fill: "none",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: "2",
											viewBox: "0 0 24 24",
											stroke: "currentColor",
											children: (0, n.jsx)("path", {
												d: e
													? "M6 18L18 6M6 6l12 12"
													: "M4 6h16M4 12h16M4 18h16",
											}),
										}),
									}),
								],
							}),
							e &&
								(0, n.jsx)("div", {
									className:
										"md:hidden bg-[var(--background)] shadow-lg",
									children: d.map((e) =>
										(0, n.jsx)(
											o.default,
											{
												href: e.href,
												className:
													"\n                  block px-4 py-3 \n                  border-b border-[var(--accent-primary)]\n                  uppercase tracking-wider\n                  transition-colors duration-300\n                  ".concat(
														l(e.href)
															? "text-[var(--accent-secondary)] bg-[var(--accent-primary)]"
															: "text-[var(--foreground)] hover:bg-[var(--accent-primary)]",
														"\n                "
													),
												onClick: () => r(!1),
												children: e.label,
											},
											e.href
										)
									),
								}),
						],
					}),
				});
			}
		},
		7648: function (e, r, a) {
			"use strict";
			a.d(r, {
				default: function () {
					return t.a;
				},
			});
			var n = a(2972),
				t = a.n(n);
		},
		7960: function () {},
		1365: function (e, r) {
			"use strict";
			r.Z = {
				src: "/_next/static/media/logo.c4742794.png",
				height: 6e3,
				width: 6e3,
				blurDataURL:
					"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAwklEQVR42mNglLLmkrMVUrJnkrJmlrYBIgiDgV3WhoHRhIFBl1fejl/BTlDRDiLHwMBt5uAWlpKWx8BgxMCgDySBcqwyNgwMDJot7b3zFixt6+idNn1WV3srA4M6g6glAwODYVNj86b1q9dt2LJ6zbrly5bXNbTLazkzMLBbpqdldra1tHVOKK2or6ptBUqIqzoycAEtZ9BnYFBiYBBkYNBiYFBkYJBnkLBiADoXaJukqoOkmqOwsr2YioOoigOLtA0Aopos5OyauKAAAAAASUVORK5CYII=",
				blurWidth: 8,
				blurHeight: 8,
			};
		},
		7151: function (e) {
			e.exports = {
				style: {
					fontFamily: "'__Inter_d65c78', '__Inter_Fallback_d65c78'",
					fontStyle: "normal",
				},
				className: "__className_d65c78",
			};
		},
	},
	function (e) {
		e.O(0, [161, 972, 145, 971, 117, 744], function () {
			return e((e.s = 7455));
		}),
			(_N_E = e.O());
	},
]);
