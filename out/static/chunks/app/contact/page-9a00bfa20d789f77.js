(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[327],
	{
		7802: function (e, s, r) {
			Promise.resolve().then(r.bind(r, 1823));
		},
		1823: function (e, s, r) {
			"use strict";
			r.r(s),
				r.d(s, {
					default: function () {
						return u;
					},
				});
			var a = r(7437),
				t = r(2265),
				l = r(9205);
			let n = (0, l.Z)("MessageCircle", [
					["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
				]),
				i = (0, l.Z)("CircleCheck", [
					["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
					["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
				]),
				c = (0, l.Z)("TriangleAlert", [
					[
						"path",
						{
							d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
							key: "wmoenq",
						},
					],
					["path", { d: "M12 9v4", key: "juzpu7" }],
					["path", { d: "M12 17h.01", key: "p32p05" }],
				]),
				m = (0, l.Z)("User", [
					[
						"path",
						{ d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
					],
					["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
				]),
				d = (0, l.Z)("Mail", [
					[
						"rect",
						{
							width: "20",
							height: "16",
							x: "2",
							y: "4",
							rx: "2",
							key: "18n3k1",
						},
					],
					[
						"path",
						{ d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
					],
				]),
				o = (0, l.Z)("Send", [
					[
						"path",
						{
							d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
							key: "1ffxy3",
						},
					],
					["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
				]);
			function u() {
				let [e, s] = (0, t.useState)({ name: "", email: "", message: "" }),
					[r, l] = (0, t.useState)({}),
					[u, h] = (0, t.useState)(null),
					x = (e) => {
						let { name: a, value: t } = e.target;
						s((e) => ({ ...e, [a]: t })),
							r[a] && l((e) => ({ ...e, [a]: "" }));
					},
					g = () => {
						let s = {};
						return (
							e.name.trim()
								? e.name.trim().length < 2 &&
								  (s.name = "Name must be at least 2 characters")
								: (s.name = "Name is required"),
							e.email.trim()
								? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email) ||
								  (s.email = "Invalid email format")
								: (s.email = "Email is required"),
							e.message.trim()
								? e.message.trim().length < 10 &&
								  (s.message = "Message must be at least 10 characters")
								: (s.message = "Message is required"),
							l(s),
							0 === Object.keys(s).length
						);
					};
				return (0, a.jsx)("div", {
					className: "min-h-screen bg-[#020817] text-white py-12 px-4",
					children: (0, a.jsxs)("div", {
						className:
							"container mx-auto max-w-2xl bg-[#0F1729] rounded-xl shadow-2xl p-8 border border-[#1a2847]",
						children: [
							(0, a.jsxs)("div", {
								className: "text-center mb-10",
								children: [
									(0, a.jsxs)("h1", {
										className:
											"text-4xl font-bold mb-4 text-white flex items-center justify-center",
										children: [
											(0, a.jsx)(n, {
												className: "mr-4 text-[#60A5FA]",
												size: 40,
											}),
											"Contact Astrominchu",
										],
									}),
									(0, a.jsx)("p", {
										className: "text-gray-300",
										children:
											"AstroMinchu is happy to assist with any questions, concerns, or inquiries you may have about us.",
									}),
								],
							}),
							"success" === u &&
								(0, a.jsxs)("div", {
									className:
										"bg-[#042f2e] border border-[#0d9488] text-emerald-300 p-4 rounded-lg mb-6 flex items-center",
									children: [
										(0, a.jsx)(i, {
											className: "mr-3 text-emerald-500",
										}),
										"Thank you! Your message has been sent successfully.",
									],
								}),
							"error" === u &&
								(0, a.jsxs)("div", {
									className:
										"bg-[#2c1212] border border-[#991b1b] text-red-300 p-4 rounded-lg mb-6 flex items-center",
									children: [
										(0, a.jsx)(c, { className: "mr-3 text-red-500" }),
										"Please fill in the form before submitting.",
									],
								}),
							(0, a.jsxs)("form", {
								onSubmit: (e) => {
									e.preventDefault(),
										g()
											? (h("success"),
											  setTimeout(() => {
													s({
														name: "",
														email: "",
														message: "",
													}),
														h(null);
											  }, 3e3))
											: h("error");
								},
								className: "space-y-6",
								children: [
									(0, a.jsxs)("div", {
										children: [
											(0, a.jsxs)("div", {
												className: "flex items-center mb-2",
												children: [
													(0, a.jsx)(m, {
														className: "mr-2 text-[#60A5FA]",
													}),
													(0, a.jsx)("label", {
														className: "text-gray-200",
														children: "Name",
													}),
												],
											}),
											(0, a.jsx)("input", {
												type: "text",
												name: "name",
												value: e.name,
												onChange: x,
												placeholder: "Enter your full name",
												className:
													"w-full p-3 bg-[#1a2847] rounded-lg focus:outline-none focus:ring-2 \n                ".concat(
														r.name
															? "border-2 border-red-700 focus:ring-red-600"
															: "border border-[#2a3c61] focus:ring-[#60A5FA]",
														" placeholder-gray-400"
													),
											}),
											r.name &&
												(0, a.jsx)("p", {
													className:
														"text-red-400 text-sm mt-1",
													children: r.name,
												}),
										],
									}),
									(0, a.jsxs)("div", {
										children: [
											(0, a.jsxs)("div", {
												className: "flex items-center mb-2",
												children: [
													(0, a.jsx)(d, {
														className: "mr-2 text-[#60A5FA]",
													}),
													(0, a.jsx)("label", {
														className: "text-gray-200",
														children: "Email",
													}),
												],
											}),
											(0, a.jsx)("input", {
												type: "email",
												name: "email",
												value: e.email,
												onChange: x,
												placeholder: "Enter your email address",
												className:
													"w-full p-3 bg-[#1a2847] rounded-lg focus:outline-none focus:ring-2 \n                ".concat(
														r.email
															? "border-2 border-red-700 focus:ring-red-600"
															: "border border-[#2a3c61] focus:ring-[#60A5FA]",
														" placeholder-gray-400"
													),
											}),
											r.email &&
												(0, a.jsx)("p", {
													className:
														"text-red-400 text-sm mt-1",
													children: r.email,
												}),
										],
									}),
									(0, a.jsxs)("div", {
										children: [
											(0, a.jsxs)("div", {
												className: "flex items-center mb-2",
												children: [
													(0, a.jsx)(n, {
														className: "mr-2 text-[#60A5FA]",
													}),
													(0, a.jsx)("label", {
														className: "text-gray-200",
														children: "Message",
													}),
												],
											}),
											(0, a.jsx)("textarea", {
												name: "message",
												value: e.message,
												onChange: x,
												placeholder: "Write your message here...",
												className:
													"w-full p-3 bg-[#1a2847] rounded-lg focus:outline-none focus:ring-2 h-32 resize-none\n                ".concat(
														r.message
															? "border-2 border-red-700 focus:ring-red-600"
															: "border border-[#2a3c61] focus:ring-[#60A5FA]",
														" placeholder-gray-400"
													),
											}),
											r.message &&
												(0, a.jsx)("p", {
													className:
														"text-red-400 text-sm mt-1",
													children: r.message,
												}),
										],
									}),
									(0, a.jsxs)("button", {
										type: "submit",
										className:
											"w-full bg-[#1d4ed8] hover:bg-[#2563eb] text-white p-3 rounded-lg transition-colors flex items-center justify-center shadow-lg",
										children: [
											(0, a.jsx)(o, { className: "mr-2" }),
											"Send Message",
										],
									}),
								],
							}),
						],
					}),
				});
			}
		},
		9205: function (e, s, r) {
			"use strict";
			r.d(s, {
				Z: function () {
					return c;
				},
			});
			var a = r(2265);
			let t = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
				l = function () {
					for (var e = arguments.length, s = Array(e), r = 0; r < e; r++)
						s[r] = arguments[r];
					return s
						.filter((e, s, r) => !!e && "" !== e.trim() && r.indexOf(e) === s)
						.join(" ")
						.trim();
				};
			var n = {
				xmlns: "http://www.w3.org/2000/svg",
				width: 24,
				height: 24,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
			};
			let i = (0, a.forwardRef)((e, s) => {
					let {
						color: r = "currentColor",
						size: t = 24,
						strokeWidth: i = 2,
						absoluteStrokeWidth: c,
						className: m = "",
						children: d,
						iconNode: o,
						...u
					} = e;
					return (0, a.createElement)(
						"svg",
						{
							ref: s,
							...n,
							width: t,
							height: t,
							stroke: r,
							strokeWidth: c ? (24 * Number(i)) / Number(t) : i,
							className: l("lucide", m),
							...u,
						},
						[
							...o.map((e) => {
								let [s, r] = e;
								return (0, a.createElement)(s, r);
							}),
							...(Array.isArray(d) ? d : [d]),
						]
					);
				}),
				c = (e, s) => {
					let r = (0, a.forwardRef)((r, n) => {
						let { className: c, ...m } = r;
						return (0, a.createElement)(i, {
							ref: n,
							iconNode: s,
							className: l("lucide-".concat(t(e)), c),
							...m,
						});
					});
					return (r.displayName = "".concat(e)), r;
				};
		},
	},
	function (e) {
		e.O(0, [971, 117, 744], function () {
			return e((e.s = 7802));
		}),
			(_N_E = e.O());
	},
]);
