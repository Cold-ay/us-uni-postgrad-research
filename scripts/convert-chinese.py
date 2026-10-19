"""Optional editorial helper: pip install opencc-python-reimplemented==0.1.7.
Deployment uses the checked-in locale files and needs no Python dependency.
"""
import json
from pathlib import Path
from opencc import OpenCC
root = Path(__file__).resolve().parent.parent
traditional = json.loads((root / 'locales/zh-Hant.json').read_text())
converter = OpenCC('t2s')
simplified = {key: converter.convert(value) for key, value in traditional.items()}
(root / 'locales/zh-Hans.json').write_text(json.dumps(simplified, ensure_ascii=False, indent=2) + '\n')
