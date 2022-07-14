from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in glowcookies_integration/__init__.py
from glowcookies_integration import __version__ as version

setup(
	name="glowcookies_integration",
	version=version,
	description="Glow Cookies integration for frappe/erpnext.",
	author="jango_blockchained",
	author_email="info@cryptolinx.de",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
