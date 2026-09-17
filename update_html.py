import re

filename = 'casagrand-industrial-landing (3) (3) copy.html'
with open(filename, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Change logo
content = re.sub(
    r'<div class="logo">CASAGRAND <span>INDUSTRIAL</span></div>',
    r'<div class="logo"><img src="./public/casagrandwarehouse_logo.webp" alt="Casagrand Industrial" style="height:32px; width:auto;"></div>',
    content
)

# 2. Change inventory title
content = re.sub(
    r'<h2>Complete inventory &#8212; across corridors</h2>',
    r'<h2>Inventory Across Corridor</h2>',
    content
)

# 4. Update the title in the tenant section before we move it
content = re.sub(
    r'<h2>Trusted by India\'s leading manufacturers &amp; logistics operators</h2>',
    r'<h2>Trusted by India\'s Leading Manufacturers &amp; Logistics Operation</h2>',
    content
)

def remove_section(text, start_tag):
    start_idx = text.find(start_tag)
    if start_idx == -1: return text, ""
    end_idx = text.find('</section>', start_idx) + len('</section>')
    section_content = text[start_idx:end_idx]
    return text[:start_idx] + text[end_idx:], section_content

content, amenities = remove_section(content, '<section id="amenities" class="amenities-wrap section-pad">')
content, tenant = remove_section(content, '<section class="tenant-wrap section-pad">')
content, presence = remove_section(content, '<section id="presence" class="presence-wrap section-pad">')

inventory_start = content.find('<section id="inventory" class="section-pad">')
if inventory_start != -1:
    inventory_end = content.find('</section>', inventory_start) + len('</section>')
    content = content[:inventory_end] + '\n\n' + tenant + content[inventory_end:]

with open(filename, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
