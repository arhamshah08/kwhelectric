from pathlib import Path

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT, WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK, WD_LINE_SPACING
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


ROOT = Path(__file__).resolve().parents[1]
EXPORTS = ROOT / "exports"
LOGO = ROOT / "assets" / "kwh-logo-mark.png"

INK = "0E1512"
SLATE = "4A5A52"
SLATE2 = "8A9992"
PAPER = "FAFAF8"
WARM = "FBF7EE"
COOL = "F4F6F4"
RULE = "E3E7E4"
MINT = "E4F4EA"
MINT_D = "1E8B4E"
HONEY = "C8901B"
HONEY_D = "8A6008"
INDIGO = "EDEAFB"
INDIGO_D = "4B31C4"
WHITE = "FFFFFF"
RISK = "9E2020"

PAGE_WIDTH_DXA = 12240
PAGE_HEIGHT_DXA = 15840
CONTENT_WIDTH_DXA = 9360
TABLE_INDENT_DXA = 120
CELL_TOP_BOTTOM_DXA = 80
CELL_LEFT_RIGHT_DXA = 120


SOURCES = {
    1: ("DERC Peer-to-Peer Energy Transaction Guidelines, 2024", "https://derc.gov.in/sites/default/files/DERC%20Peer%20to%20Peer%20Energy%20Transaction%20Guidelines%202024%20-%2024.06.2024.pdf"),
    2: ("DERC Order in Petition No. 02/2026 — TPDDL P2P pilot", "https://www.derc.gov.in/sites/default/files/Order%20in%20Petition%20No.%2002_2026_P2P.pdf"),
    3: ("PVVNL — current IES P2P pilot and authorised trading applications", "https://www.pvvnl.org/P2P-Energy-Trading"),
    4: ("REC — India Energy Stack P2P Trading EOI", "https://recindia.nic.in/ies-expression-of-interest"),
    5: ("MNRE/PIB — PM Surya Ghar crossed 40 lakh beneficiary households", "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2268992&fgfgf4=&lang=2&reg=48&v=2451ggfrd"),
    6: ("UPERC — P2P Solar Energy Transaction Guidelines", "https://uperc.org/App_File/P2P-Guidelines_UPERC-pdf416202393822PM.pdf"),
    7: ("Tata Power-DDL — live P2P pilot announcement", "https://www.tatapower-ddl.com/pr-details/199/1658486/tata-power-ddl-rolls-out-live-peer-to-peer-%28p2p%29-solar-energy-trading%2C-a-first-of-its-kind-pilot-project-in-delhi"),
    8: ("IEEFA/JMK — rooftop solar market and CESC P2P case study", "https://ieefa.org/sites/default/files/2023-08/IEEFA_JMK_Rooftop%20Solar%20Commercial%20and%20Industrial%20Market_August%202023.pdf"),
    9: ("Ola Electric — Ola Shakti specifications", "https://www.olaelectric.com/ola-shakti"),
    10: ("Ola Electric — Shakti product-launch disclosure", "https://cdn.olaelectric.com/sites/evdp/pages/investor/announcement/Disclosure_regarding_product_launch_dated_October_16_2025.pdf"),
    11: ("Tata Power — MySine Energy Storage System", "https://www.tatapower.com/solaroof/mysine-energy-storage-system"),
    12: ("Tata Power — battery-storage portfolio launch", "https://www.tatapower.com/news-and-media/media-releases/tata-power-launches-ghar-ghar-solar-in-haryana-targeting-1-lakh-homes-and-500-mwp-of-rooftop-solar-capacity-over-the-next-three-years"),
    13: ("Amara Raja — 1 GWh lithium storage deployed across telecom sites", "https://www.amararaja.com/press_release/amara-raja-crosses-1-gwh-lithium-storage-deployment-powering-indias-telecom-networks/"),
    14: ("Exide Industries — solar battery portfolio", "https://www.exideindustries.com/products/exides-solar-portfolio/solar-batteries.aspx"),
    15: ("Livguard — Lithium X hybrid residential energy storage", "https://www.livguard.com/ess/lithium-x"),
    16: ("Ministry of Power — National Framework for Promoting Energy Storage Systems", "https://powermin.gov.in/sites/default/files/webform/notices/National_Framework_for_promoting_Energy_Storage_Systems_August_2023.pdf"),
    17: ("MNRE — renewable-energy physical progress to 30 June 2026", "https://mnre.gov.in/en/physical-progress/"),
}


def rgb(value):
    value = value.replace("#", "")
    return RGBColor(int(value[0:2], 16), int(value[2:4], 16), int(value[4:6], 16))


def set_run(run, size=11, bold=None, italic=None, color=INK, font="Calibri"):
    run.font.name = font
    run._element.get_or_add_rPr().rFonts.set(qn("w:ascii"), font)
    run._element.get_or_add_rPr().rFonts.set(qn("w:hAnsi"), font)
    run.font.size = Pt(size)
    run.font.color.rgb = rgb(color)
    if bold is not None:
        run.bold = bold
    if italic is not None:
        run.italic = italic
    return run


def configure_document(doc, title, subject, confidential=False):
    section = doc.sections[0]
    section.page_width = Inches(8.5)
    section.page_height = Inches(11)
    section.top_margin = Inches(1)
    section.right_margin = Inches(1)
    section.bottom_margin = Inches(1)
    section.left_margin = Inches(1)
    section.header_distance = Inches(0.492)
    section.footer_distance = Inches(0.492)

    props = doc.core_properties
    props.title = title
    props.subject = subject
    props.author = "kWh Electric"
    props.keywords = "kWh Electric, India, battery, P2P energy trading, IES"

    styles = doc.styles
    normal = styles["Normal"]
    normal.font.name = "Calibri"
    normal._element.rPr.rFonts.set(qn("w:ascii"), "Calibri")
    normal._element.rPr.rFonts.set(qn("w:hAnsi"), "Calibri")
    normal.font.size = Pt(11)
    normal.font.color.rgb = rgb(INK)
    normal.paragraph_format.space_before = Pt(0)
    normal.paragraph_format.space_after = Pt(6)
    normal.paragraph_format.line_spacing = 1.1
    normal.paragraph_format.widow_control = True

    style_specs = {
        "Heading 1": (16, INDIGO_D, 16, 8),
        "Heading 2": (13, INDIGO_D, 12, 6),
        "Heading 3": (12, MINT_D, 8, 4),
    }
    for name, (size, color, before, after) in style_specs.items():
        style = styles[name]
        style.font.name = "Calibri"
        style._element.rPr.rFonts.set(qn("w:ascii"), "Calibri")
        style._element.rPr.rFonts.set(qn("w:hAnsi"), "Calibri")
        style.font.size = Pt(size)
        style.font.bold = True
        style.font.color.rgb = rgb(color)
        style.paragraph_format.space_before = Pt(before)
        style.paragraph_format.space_after = Pt(after)
        style.paragraph_format.keep_with_next = True
        style.paragraph_format.widow_control = True

    make_numbering(doc)
    add_header_footer(doc, confidential=confidential)


def make_numbering(doc):
    numbering = doc.part.numbering_part.element
    existing = [int(x.get(qn("w:abstractNumId"))) for x in numbering.findall(qn("w:abstractNum"))]
    next_abs = max(existing, default=-1) + 1
    existing_num = [int(x.get(qn("w:numId"))) for x in numbering.findall(qn("w:num"))]
    next_num = max(existing_num, default=0) + 1

    def add_definition(num_format, text, bullet_font=None):
        nonlocal next_abs, next_num
        abstract = OxmlElement("w:abstractNum")
        abstract.set(qn("w:abstractNumId"), str(next_abs))
        multi = OxmlElement("w:multiLevelType")
        multi.set(qn("w:val"), "singleLevel")
        abstract.append(multi)
        lvl = OxmlElement("w:lvl")
        lvl.set(qn("w:ilvl"), "0")
        start = OxmlElement("w:start")
        start.set(qn("w:val"), "1")
        lvl.append(start)
        num_fmt = OxmlElement("w:numFmt")
        num_fmt.set(qn("w:val"), num_format)
        lvl.append(num_fmt)
        lvl_text = OxmlElement("w:lvlText")
        lvl_text.set(qn("w:val"), text)
        lvl.append(lvl_text)
        suff = OxmlElement("w:suff")
        suff.set(qn("w:val"), "tab")
        lvl.append(suff)
        ppr = OxmlElement("w:pPr")
        tabs = OxmlElement("w:tabs")
        tab = OxmlElement("w:tab")
        tab.set(qn("w:val"), "num")
        tab.set(qn("w:pos"), "720")
        tabs.append(tab)
        ppr.append(tabs)
        ind = OxmlElement("w:ind")
        ind.set(qn("w:left"), "720")
        ind.set(qn("w:hanging"), "360")
        ppr.append(ind)
        spacing = OxmlElement("w:spacing")
        spacing.set(qn("w:after"), "160")
        spacing.set(qn("w:line"), "280")
        spacing.set(qn("w:lineRule"), "auto")
        ppr.append(spacing)
        lvl.append(ppr)
        if bullet_font:
            rpr = OxmlElement("w:rPr")
            fonts = OxmlElement("w:rFonts")
            fonts.set(qn("w:ascii"), bullet_font)
            fonts.set(qn("w:hAnsi"), bullet_font)
            rpr.append(fonts)
            lvl.append(rpr)
        abstract.append(lvl)
        numbering.append(abstract)

        num = OxmlElement("w:num")
        num.set(qn("w:numId"), str(next_num))
        abs_id = OxmlElement("w:abstractNumId")
        abs_id.set(qn("w:val"), str(next_abs))
        num.append(abs_id)
        numbering.append(num)
        result = next_num
        next_abs += 1
        next_num += 1
        return result

    doc._kwh_bullet_num_id = add_definition("bullet", "•", "Symbol")
    doc._kwh_decimal_num_id = add_definition("decimal", "%1.")


def add_header_footer(doc, confidential=False):
    for section in doc.sections:
        header = section.header
        p = header.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.LEFT
        p.paragraph_format.space_after = Pt(0)
        if LOGO.exists():
            r = p.add_run()
            logo = r.add_picture(str(LOGO), width=Inches(0.19))
            logo._inline.docPr.set("descr", "kWh Electric logo")
            logo._inline.docPr.set("title", "kWh Electric")
            r2 = p.add_run("   kWh Electric")
        else:
            r2 = p.add_run("kWh Electric")
        set_run(r2, 9, bold=True, color=INK)
        label = "   |   Confidential — internal working model" if confidential else "   |   Battery participation infrastructure"
        set_run(p.add_run(label), 8.5, color=SLATE2)

        footer = section.footer
        fp = footer.paragraphs[0]
        fp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
        fp.paragraph_format.space_before = Pt(0)
        fp.paragraph_format.space_after = Pt(0)
        set_run(fp.add_run("kWh Electric   ·   "), 8, color=SLATE2)
        add_field(fp, "PAGE")
        set_run(fp.add_run(" / "), 8, color=SLATE2)
        add_field(fp, "NUMPAGES")


def add_field(paragraph, instruction):
    run = paragraph.add_run()
    set_run(run, 8, color=SLATE2)
    fld_begin = OxmlElement("w:fldChar")
    fld_begin.set(qn("w:fldCharType"), "begin")
    instr = OxmlElement("w:instrText")
    instr.set(qn("xml:space"), "preserve")
    instr.text = f" {instruction} "
    fld_sep = OxmlElement("w:fldChar")
    fld_sep.set(qn("w:fldCharType"), "separate")
    text = OxmlElement("w:t")
    text.text = "1"
    fld_end = OxmlElement("w:fldChar")
    fld_end.set(qn("w:fldCharType"), "end")
    run._r.extend([fld_begin, instr, fld_sep, text, fld_end])


def add_kicker(doc, text, color=MINT_D, after=5):
    p = doc.add_paragraph()
    if getattr(doc, "_kwh_next_page_break", False):
        p.paragraph_format.page_break_before = True
        doc._kwh_next_page_break = False
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(after)
    set_run(p.add_run(text.upper()), 9, bold=True, color=color)
    return p


def add_title(doc, text, size=27, after=7):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(after)
    p.paragraph_format.keep_with_next = True
    set_run(p.add_run(text), size, bold=True, color=INK)
    return p


def add_subtitle(doc, text, size=13.5, after=15):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(after)
    p.paragraph_format.line_spacing = 1.1
    set_run(p.add_run(text), size, color=SLATE)
    return p


def add_paragraph(doc, text="", size=11, color=INK, bold=False, italic=False, after=6, align=None, keep=False):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(after)
    p.paragraph_format.line_spacing = 1.1
    p.paragraph_format.keep_together = keep
    if align is not None:
        p.alignment = align
    set_run(p.add_run(text), size, bold=bold, italic=italic, color=color)
    return p


def add_rich_paragraph(doc, parts, after=6, size=11, align=None):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(after)
    p.paragraph_format.line_spacing = 1.1
    if align is not None:
        p.alignment = align
    for text, kwargs in parts:
        set_run(p.add_run(text), kwargs.get("size", size), bold=kwargs.get("bold"), italic=kwargs.get("italic"), color=kwargs.get("color", INK))
    return p


def add_list_item(doc, text, ordered=False, bold_lead=None, after=8):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(after)
    p.paragraph_format.line_spacing = 1.167
    p.paragraph_format.left_indent = Inches(0.5)
    p.paragraph_format.first_line_indent = Inches(-0.25)
    pPr = p._p.get_or_add_pPr()
    numPr = OxmlElement("w:numPr")
    ilvl = OxmlElement("w:ilvl")
    ilvl.set(qn("w:val"), "0")
    numId = OxmlElement("w:numId")
    numId.set(qn("w:val"), str(doc._kwh_decimal_num_id if ordered else doc._kwh_bullet_num_id))
    numPr.extend([ilvl, numId])
    pPr.append(numPr)
    if bold_lead and text.startswith(bold_lead):
        set_run(p.add_run(bold_lead), 11, bold=True, color=INK)
        set_run(p.add_run(text[len(bold_lead):]), 11, color=INK)
    else:
        set_run(p.add_run(text), 11, color=INK)
    return p


def add_callout(doc, label, text, fill=MINT, border=MINT_D, label_color=MINT_D, after=8):
    table = doc.add_table(rows=1, cols=1)
    set_table_geometry(table, [CONTENT_WIDTH_DXA])
    cell = table.cell(0, 0)
    set_cell_shading(cell, fill)
    set_cell_border(cell, border, size=8)
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.line_spacing = 1.1
    set_run(p.add_run(label.upper() + "  "), 9, bold=True, color=label_color)
    set_run(p.add_run(text), 11, bold=True, color=INK)
    spacer = doc.add_paragraph()
    spacer.paragraph_format.space_after = Pt(after)
    spacer.paragraph_format.space_before = Pt(0)
    return table


def add_metric_strip(doc, metrics):
    widths = [CONTENT_WIDTH_DXA // len(metrics)] * len(metrics)
    widths[-1] += CONTENT_WIDTH_DXA - sum(widths)
    table = doc.add_table(rows=1, cols=len(metrics))
    set_table_geometry(table, widths)
    for idx, (value, label, fill, color) in enumerate(metrics):
        cell = table.cell(0, idx)
        set_cell_shading(cell, fill)
        set_cell_border(cell, RULE, size=4)
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.space_before = Pt(4)
        p.paragraph_format.space_after = Pt(2)
        set_run(p.add_run(value), 17, bold=True, color=color)
        p2 = cell.add_paragraph()
        p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p2.paragraph_format.space_after = Pt(4)
        set_run(p2.add_run(label), 8.5, color=SLATE)
    add_paragraph(doc, "", after=5)
    return table


def set_cell_shading(cell, fill):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = tcPr.find(qn("w:shd"))
    if shd is None:
        shd = OxmlElement("w:shd")
        tcPr.append(shd)
    shd.set(qn("w:fill"), fill)


def set_cell_border(cell, color=RULE, size=4):
    tcPr = cell._tc.get_or_add_tcPr()
    borders = tcPr.find(qn("w:tcBorders"))
    if borders is None:
        borders = OxmlElement("w:tcBorders")
        tcPr.append(borders)
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        tag = qn(f"w:{edge}")
        element = borders.find(tag)
        if element is None:
            element = OxmlElement(f"w:{edge}")
            borders.append(element)
        element.set(qn("w:val"), "single")
        element.set(qn("w:sz"), str(size))
        element.set(qn("w:space"), "0")
        element.set(qn("w:color"), color)


def set_table_geometry(table, widths_dxa, indent_dxa=TABLE_INDENT_DXA):
    table.alignment = WD_TABLE_ALIGNMENT.LEFT
    table.autofit = False
    tbl = table._tbl
    tblPr = tbl.tblPr
    tblW = tblPr.find(qn("w:tblW"))
    if tblW is None:
        tblW = OxmlElement("w:tblW")
        tblPr.append(tblW)
    tblW.set(qn("w:w"), str(sum(widths_dxa)))
    tblW.set(qn("w:type"), "dxa")
    tblInd = tblPr.find(qn("w:tblInd"))
    if tblInd is None:
        tblInd = OxmlElement("w:tblInd")
        tblPr.append(tblInd)
    tblInd.set(qn("w:w"), str(indent_dxa))
    tblInd.set(qn("w:type"), "dxa")
    layout = tblPr.find(qn("w:tblLayout"))
    if layout is None:
        layout = OxmlElement("w:tblLayout")
        tblPr.append(layout)
    layout.set(qn("w:type"), "fixed")

    grid = tbl.tblGrid
    for child in list(grid):
        grid.remove(child)
    for width in widths_dxa:
        col = OxmlElement("w:gridCol")
        col.set(qn("w:w"), str(width))
        grid.append(col)

    for row in table.rows:
        for idx, cell in enumerate(row.cells):
            width = widths_dxa[idx]
            tcPr = cell._tc.get_or_add_tcPr()
            tcW = tcPr.find(qn("w:tcW"))
            if tcW is None:
                tcW = OxmlElement("w:tcW")
                tcPr.append(tcW)
            tcW.set(qn("w:w"), str(width))
            tcW.set(qn("w:type"), "dxa")
            cell.width = Inches(width / 1440)
            cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
            set_cell_margins(cell)


def set_cell_margins(cell):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = tcPr.find(qn("w:tcMar"))
    if tcMar is None:
        tcMar = OxmlElement("w:tcMar")
        tcPr.append(tcMar)
    for tag, value in (("top", CELL_TOP_BOTTOM_DXA), ("bottom", CELL_TOP_BOTTOM_DXA), ("start", CELL_LEFT_RIGHT_DXA), ("end", CELL_LEFT_RIGHT_DXA)):
        node = tcMar.find(qn(f"w:{tag}"))
        if node is None:
            node = OxmlElement(f"w:{tag}")
            tcMar.append(node)
        node.set(qn("w:w"), str(value))
        node.set(qn("w:type"), "dxa")


def set_repeat_header(row):
    trPr = row._tr.get_or_add_trPr()
    tblHeader = OxmlElement("w:tblHeader")
    tblHeader.set(qn("w:val"), "true")
    trPr.append(tblHeader)


def set_cell_text(cell, text, size=9.5, bold=False, color=INK, align=WD_ALIGN_PARAGRAPH.LEFT, fill=None):
    if fill:
        set_cell_shading(cell, fill)
    set_cell_border(cell, RULE, size=4)
    p = cell.paragraphs[0]
    p.alignment = align
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.line_spacing = 1.05
    p.clear()
    set_run(p.add_run(text), size, bold=bold, color=color)
    return p


def add_data_table(doc, headers, rows, widths_dxa, font_size=9.2, header_fill=COOL):
    table = doc.add_table(rows=1, cols=len(headers))
    for header, cell in zip(headers, table.rows[0].cells):
        set_cell_text(cell, header, size=9, bold=True, color=INK, fill=header_fill)
    set_repeat_header(table.rows[0])
    for row in rows:
        cells = table.add_row().cells
        for value, cell in zip(row, cells):
            set_cell_text(cell, str(value), size=font_size, color=INK)
    set_table_geometry(table, widths_dxa)
    add_paragraph(doc, "", after=4)
    return table


def add_hyperlink(paragraph, text, url, color=INDIGO_D, underline=True, size=8.5):
    part = paragraph.part
    r_id = part.relate_to(url, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", is_external=True)
    hyperlink = OxmlElement("w:hyperlink")
    hyperlink.set(qn("r:id"), r_id)
    new_run = OxmlElement("w:r")
    rPr = OxmlElement("w:rPr")
    rFonts = OxmlElement("w:rFonts")
    rFonts.set(qn("w:ascii"), "Calibri")
    rFonts.set(qn("w:hAnsi"), "Calibri")
    rPr.append(rFonts)
    c = OxmlElement("w:color")
    c.set(qn("w:val"), color)
    rPr.append(c)
    sz = OxmlElement("w:sz")
    sz.set(qn("w:val"), str(int(size * 2)))
    rPr.append(sz)
    if underline:
        u = OxmlElement("w:u")
        u.set(qn("w:val"), "single")
        rPr.append(u)
    new_run.append(rPr)
    t = OxmlElement("w:t")
    t.text = text
    new_run.append(t)
    hyperlink.append(new_run)
    paragraph._p.append(hyperlink)
    return hyperlink


def add_source_list(doc, ids, heading="Selected sources", compact=False):
    doc.add_heading(heading, level=2)
    for source_id in ids:
        title, url = SOURCES[source_id]
        p = doc.add_paragraph()
        p.paragraph_format.left_indent = Inches(0.18)
        p.paragraph_format.first_line_indent = Inches(-0.18)
        p.paragraph_format.space_after = Pt(2 if compact else 4)
        set_run(p.add_run(f"[{source_id}] "), 8 if compact else 9, bold=True, color=SLATE)
        add_hyperlink(p, title, url, size=8 if compact else 9)


def page_break(doc):
    doc._kwh_next_page_break = True


def prevent_row_split(row):
    trPr = row._tr.get_or_add_trPr()
    cant = OxmlElement("w:cantSplit")
    trPr.append(cant)


def build_intro():
    doc = Document()
    configure_document(
        doc,
        "kWh Electric — Battery Participation Infrastructure",
        "Two-page partner introduction for battery OEMs, DISCOMs and energy-market platforms",
        confidential=False,
    )

    add_kicker(doc, "Partner introduction · India · July 2026")
    add_title(doc, "Turn every battery into a market-ready energy asset.", size=27, after=7)
    add_subtitle(doc, "kWh Electric connects batteries from any OEM to DISCOM programs and energy markets through one secure edge gateway and one permissioned control API.", size=13.5, after=12)
    add_callout(doc, "The missing layer", "Trading platforms can match a buyer and seller. kWh Electric makes the physical battery observable, controllable, safe and verifiable enough to deliver the trade.", fill=INDIGO, border=INDIGO_D, label_color=INDIGO_D, after=5)

    add_metric_strip(doc, [
        ("40 lakh+", "solar households reached by PM Surya Ghar by May 2026 [5]", MINT, MINT_D),
        ("11", "trading providers listed in the current PVVNL IES pilot [3]", INDIGO, INDIGO_D),
        ("BESS", "renewable-charged storage is expressly eligible in Delhi [1]", WARM, HONEY_D),
    ])

    doc.add_heading("The market has an application layer. It lacks a dependable asset layer.", level=1)
    add_list_item(doc, "Battery OEMs ship closed hardware and apps, but each utility, aggregator and trading platform still faces a new integration.", bold_lead="Battery OEMs")
    add_list_item(doc, "Trading apps see meter data after the fact; they do not automatically know safe power, renewable-charged energy, state of charge, warranty limits or owner reserve.", bold_lead="Trading apps")
    add_list_item(doc, "DISCOMs remain the network operator, verifier and biller, so every dispatch needs permission, auditability and reconciliation—not just a digital trade.", bold_lead="DISCOMs")

    doc.add_heading("One integration from battery to market", level=1)
    flow = add_data_table(
        doc,
        ["1 · Physical asset", "2 · kWh Electric", "3 · Approved market"],
        [["Battery · BMS · inverter\nCAN / Modbus / SunSpec", "Gateway · digital twin · policy engine\nForecast · provenance · safe dispatch", "IES / trading app / DISCOM\nSchedule · meter verification · bill settlement"]],
        [2800, 3760, 2800],
        font_size=9.7,
        header_fill=COOL,
    )
    for cell in flow.rows[1].cells:
        set_cell_shading(cell, PAPER)

    page_break(doc)
    add_kicker(doc, "A shared infrastructure layer — not another marketplace")
    add_title(doc, "One integration. Four winners.", size=24, after=10)

    add_data_table(
        doc,
        ["Partner", "What kWh Electric unlocks", "Why it matters"],
        [
            ["Battery OEM", "P2P / IES-ready product without utility-by-utility engineering", "Differentiation and recurring services"],
            ["DISCOM", "Verified availability and safe dispatch across mixed OEM fleets", "Dependable local flexibility"],
            ["Trading provider", "One battery-control API beneath the marketplace", "Better delivery; lower support cost"],
            ["Asset owner", "Protected backup plus renewable-energy income", "New value without surrendering control"],
        ],
        [1620, 4300, 3440],
        font_size=9.1,
        header_fill=MINT,
    )

    doc.add_heading("Proposed 90-day Delhi pilot", level=1)
    add_callout(doc, "Pilot objective", "Prove that heterogeneous solar-plus-storage systems can deliver a regulated P2P schedule more reliably than solar alone—without replacing the DISCOM meter, bill or trading application.", fill=WARM, border=HONEY, label_color=HONEY_D, after=4)
    add_list_item(doc, "Onboard 25–50 sites with one battery OEM, one authorised IES trading provider and TPDDL or BRPL.", ordered=True, after=1)
    add_list_item(doc, "Connect BMS/inverter telemetry, owner permissions and renewable-charge provenance; run day-ahead schedules.", ordered=True, after=1)
    add_list_item(doc, "Reconcile against the DISCOM meter and compare delivery, owner value and degradation with solar alone.", ordered=True, after=1)

    doc.add_heading("Measure what makes the market scalable", level=2)
    add_metric_strip(doc, [
        ("≥95%", "dispatch acknowledgement target", INDIGO, INDIGO_D),
        ("<2%", "gateway-to-meter reconciliation target", MINT, MINT_D),
        ("₹ net", "owner value after losses and degradation", WARM, HONEY_D),
    ])

    add_callout(doc, "Engagement", "Seeking a battery OEM, an authorised trading provider and a Delhi DISCOM partner for the first multi-OEM battery P2P pilot.", fill=INDIGO, border=INDIGO_D, label_color=INDIGO_D, after=1)
    add_rich_paragraph(doc, [
        ("kWh Electric", {"bold": True}),
        ("  ·  Hardware gateway + platform  ·  One integration, any asset, any application  ·  ", {"color": SLATE}),
        ("kwhelectric.io", {"bold": True, "color": INDIGO_D}),
    ], after=3, align=WD_ALIGN_PARAGRAPH.CENTER)
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(0)
    set_run(p.add_run("Evidence: "), 7.5, bold=True, color=SLATE)
    for idx, source_id in enumerate([1, 2, 3, 4, 5]):
        title, url = SOURCES[source_id]
        short = {1: "DERC 2024", 2: "DERC 02/2026", 3: "PVVNL IES pilot", 4: "REC IES EOI", 5: "MNRE/PIB"}[source_id]
        add_hyperlink(p, short, url, size=7.5)
        if idx < 4:
            set_run(p.add_run("  ·  "), 7.5, color=SLATE2)

    path = EXPORTS / "kWh-Electric-P2P-Battery-Intro.docx"
    doc.save(path)
    return path


def build_internal_model():
    doc = Document()
    configure_document(
        doc,
        "kWh Electric — P2P Battery Business Model",
        "Internal working business model for battery participation in India's regulated P2P energy markets",
        confidential=True,
    )

    add_kicker(doc, "Internal strategy memo · version 0.1 · 27 July 2026", color=RISK)
    add_title(doc, "Business model: batteries as dispatchable participants in India’s P2P energy markets", size=25, after=7)
    add_subtitle(doc, "Working thesis, customer model, economics, beachhead and validation plan for kWh Electric.", size=13.5, after=12)
    add_callout(doc, "Recommendation", "Build the OEM-neutral battery participation layer beneath trading apps and DISCOM programs. Do not launch as a standalone electricity exchange, token or consumer wallet.", fill=INDIGO, border=INDIGO_D, label_color=INDIGO_D, after=8)

    doc.add_heading("The thesis in one paragraph", level=1)
    add_paragraph(doc, "India has proven P2P solar trading in Lucknow, Delhi and Kolkata and is now operating an interstate IES pilot with multiple trading applications. The application layer is becoming interoperable; the physical-asset layer is still fragmented. kWh Electric connects heterogeneous batteries, establishes safe and renewable-eligible availability, executes market schedules at the edge, and produces the evidence that trading providers and DISCOMs need for settlement. The business earns from enabling and operating the asset—not from owning the electricity trade.")

    doc.add_heading("Strategic choices", level=1)
    add_data_table(
        doc,
        ["Choose", "Avoid", "Reason"],
        [
            ["OEM-neutral control layer", "Twelfth trading app", "PVVNL already lists eleven authorised providers; physical integration remains fragmented. [3]"],
            ["Delhi solar + storage beachhead", "Nationwide launch", "Delhi expressly includes renewable-charged BESS; permissions remain state-specific. [1]"],
            ["Blended hardware + SaaS + enterprise revenue", "P2P fee-only model", "₹0.42/kWh is too thin to fund device infrastructure. [2]"],
            ["P2P as one service in a value stack", "Battery built solely for energy resale", "Backup, self-consumption and flexibility protect the customer value proposition."],
        ],
        [2050, 1960, 5350],
        font_size=9.1,
        header_fill=COOL,
    )
    add_callout(doc, "Non-negotiable", "The owner reserve, OEM warranty, thermal limits and DISCOM authority outrank every market dispatch.", fill=WARM, border=HONEY, label_color=HONEY_D)

    page_break(doc)
    add_kicker(doc, "1 · Market evidence")
    add_title(doc, "From demonstrations to regulated settlement", size=22, after=7)
    add_data_table(
        doc,
        ["When / where", "Pilot", "Public evidence", "Business implication"],
        [
            ["2020 · Lucknow", "UPPCL/MVVNL + ISGF + Powerledger", "12 participants; pilot recorded as successful; regulator asked for scale and storage. [6]", "Pilot can create the rulebook."],
            ["2021 · North Delhi", "Tata Power-DDL + ISGF + Powerledger", "More than 2 MW; ~150-site design; dynamic P2P logic. [7]", "Large urban DISCOMs will test live cohorts."],
            ["2022 · Kolkata", "CESC + ISGF + Powerledger", "1,001 participants; 10% buyer-rate reduction reported. Units in public volume data conflict. [8]", "DISCOM value must be part of the proposition."],
            ["2026 · Delhi–UP", "TPDDL + BRPL + PVVNL under IES", "Interstate, multi-app pilot; 11 providers listed by PVVNL. [2][3][4]", "Marketplace software is contestable; asset control is the wedge."],
        ],
        [1500, 2200, 3500, 2160],
        font_size=8.7,
        header_fill=MINT,
    )

    doc.add_heading("The operating model regulators have accepted", level=1)
    add_list_item(doc, "The DISCOM verifies the participant and network, supplies meter data and remains responsible for the bill and consumer relationship.", after=5)
    add_list_item(doc, "A service provider matches scheduled kWh at a mutually agreed price and reconciles schedule versus actual meter data.", after=5)
    add_list_item(doc, "Physical power continues through the distribution network; P2P is a contractual, measurement and settlement overlay.", after=5)
    add_list_item(doc, "Delhi includes a BESS only when it is charged through a renewable energy system; general grid-charge-and-resell arbitrage is not established. [1]", after=5)
    add_list_item(doc, "The 2026 Delhi pilot permits a total transaction charge of ₹0.42/kWh inclusive of GST, split between buyer and seller, and rejects independent off-bill settlement. [2]", after=5)

    doc.add_heading("Why the timing is real", level=1)
    add_metric_strip(doc, [
        ("40 lakh+", "PM Surya Ghar beneficiary households by May 2026 [5]", MINT, MINT_D),
        ("30.11 GW", "grid-connected rooftop solar by June 2026 [17]", INDIGO, INDIGO_D),
        ("236.22 GWh", "projected BESS requirement in 2031–32 [16]", WARM, HONEY_D),
    ])
    add_paragraph(doc, "These are national context metrics, not kWh Electric's serviceable market. The initial SAM is the number of export-capable, smart-metered solar-plus-storage sites inside a participating DISCOM territory.", size=9.5, color=SLATE, italic=True)

    page_break(doc)
    add_kicker(doc, "2 · Product and customer")
    add_title(doc, "The asset participation layer", size=22, after=7)
    add_callout(doc, "Category", "A secure edge gateway, digital twin and policy engine that turns an OEM battery into a program-ready asset for any approved market application.", fill=MINT, border=MINT_D, label_color=MINT_D)

    doc.add_heading("Product boundary", level=1)
    add_data_table(
        doc,
        ["Layer", "kWh Electric owns", "kWh Electric does not own"],
        [
            ["Physical", "Gateway connection to BMS, inverter and site meter; local control", "Battery cells, inverter hardware, DISCOM meter"],
            ["Digital twin", "Normalised capability, SoC/SoH, safe limits, permissions and owner reserve", "OEM warranty policy; it is encoded and enforced"],
            ["Market execution", "Availability forecast, schedule-to-dispatch, acknowledgements, audit log", "Price matching, customer wallet, exchange licence"],
            ["Settlement evidence", "Device telemetry, renewable provenance, exception record and reconciliation", "Final regulated meter reading and electricity bill"],
        ],
        [1450, 4030, 3880],
        font_size=9,
        header_fill=INDIGO,
    )

    doc.add_heading("Who pays, and for what job", level=1)
    add_data_table(
        doc,
        ["Customer", "Job to be done", "Economic buyer", "Initial offer"],
        [
            ["Battery OEM", "Make each model P2P/IES-ready without utility-by-utility engineering", "Product / platform head", "Model integration + embedded gateway + fleet API"],
            ["Trading provider / aggregator", "Control mixed OEM fleets through one interface", "Founder / market operations", "Portfolio API + device orchestration"],
            ["DISCOM", "Obtain safe, auditable flexibility and improve schedule delivery", "Innovation / DER / DSM team", "Pilot, control assurance and fleet observability"],
            ["Owner / EPC / financier", "Preserve backup while monetising an installed asset", "Owner or channel partner", "Bundled gateway + recurring service"],
        ],
        [1700, 3240, 1830, 2590],
        font_size=8.8,
        header_fill=COOL,
    )

    doc.add_heading("Core capabilities for v1", level=1)
    for text in [
        "Local CAN / RS-485 / Ethernet integration and reusable device profiles.",
        "Capability discovery: charge/discharge limits, power, energy, alarms and export ability.",
        "SoC/SoH and available-energy forecast with an explicit owner-reserved backup floor.",
        "Renewable-charge provenance ledger separated from the market ledger.",
        "Policy-controlled dispatch, local fallback and signed command/acknowledgement trail.",
        "Boundary-meter reconciliation and IES/trading-platform API adapter.",
    ]:
        add_list_item(doc, text, after=4)

    add_kicker(doc, "3 · Commercial model")
    add_title(doc, "Sell enablement and orchestration—not electricity", size=22, after=7)
    add_data_table(
        doc,
        ["Revenue line", "Payer", "Planning range — hypothesis", "Trigger and notes"],
        [
            ["Model integration / NRE", "Battery OEM", "₹10–25 lakh per product family", "Protocol, safety policy, certification evidence and pilot support; validate in interviews"],
            ["Gateway / embedded licence", "OEM, EPC or owner", "Target ~₹6,000 per Model A unit", "Existing product target at volume; BOM and gross margin not yet locked"],
            ["Residential orchestration", "OEM, aggregator or owner", "₹149–299 per active device / month", "Telemetry, forecasts, control policy, audit and API"],
            ["C&I orchestration", "OEM, aggregator or asset owner", "₹2,000–10,000 per site / month", "Depends on kW, telemetry rate, SLA and market stack"],
            ["Enterprise platform minimum", "TSP, OEM or DISCOM", "₹10–50 lakh / year", "Portfolio API, program configuration, support and reporting"],
            ["Performance share", "Aggregator or owner", "10–20% of verified incremental value", "Only where contract and regulation permit; never assume a share of the regulated transaction fee"],
        ],
        [1900, 1550, 2450, 3460],
        font_size=8.5,
        header_fill=MINT,
    )

    add_callout(doc, "Pricing principle", "Charge for model enablement, active control and enterprise assurance. Treat market revenue share as upside, not the base case.", fill=INDIGO, border=INDIGO_D, label_color=INDIGO_D)

    doc.add_heading("Offer architecture", level=1)
    add_data_table(
        doc,
        ["Offer", "Includes", "Best first buyer", "Success gate"],
        [
            ["OEM Launch", "One model profile, lab integration, pilot devices, market-ready claim pack", "Ola/Tata/Livguard-style product team", "Safe read/write control on a shipping model"],
            ["Fleet Connect", "Gateway, digital twin, monitoring, policy and API", "OEM, EPC, financier", "≥95% online / control acknowledgement target"],
            ["Market Dispatch", "Availability forecast, schedule execution, audit and reconciliation", "Trading provider / aggregator", "Under-injection improvement and net owner value"],
            ["DISCOM Assurance", "Fleet visibility, permissions, exception handling and program reports", "DISCOM DER/DSM team", "Accepted data and controls for a live program"],
        ],
        [1650, 3480, 2140, 2090],
        font_size=8.8,
        header_fill=COOL,
    )

    doc.add_heading("Channel logic", level=1)
    add_list_item(doc, "OEM embed is the compounding route: one device profile unlocks every shipped unit of that model.", after=5)
    add_list_item(doc, "Trading providers accelerate market access but should not own the kWh device relationship or data model.", after=5)
    add_list_item(doc, "DISCOM approval creates trust and program eligibility; it is a channel and control authority, not necessarily the first SaaS payer.", after=5)
    add_list_item(doc, "EPCs and financiers are later channels once the OEM and DISCOM acceptance path is repeatable.", after=5)

    add_kicker(doc, "4 · Economics")
    add_title(doc, "P2P alone does not pay for the battery—or the platform", size=22, after=7)
    add_paragraph(doc, "The correct question is not whether P2P can finance a new battery. It is whether kWh Electric can add profitable incremental revenue and grid value to a battery already purchased for backup, self-consumption or resilience.")

    doc.add_heading("Illustrative residential throughput", level=1)
    add_data_table(
        doc,
        ["Input", "Illustrative assumption", "Result / interpretation"],
        [
            ["Nominal battery", "9.1 kWh", "Comparable to the largest public Ola Shakti configuration [9]"],
            ["Usable depth of discharge", "90%", "8.19 kWh available before conversion [9]"],
            ["Dispatch efficiency", "90%", "7.37 kWh delivered per full market cycle"],
            ["Market days", "300 per year", "2,211 kWh delivered annually"],
            ["Incremental P2P value", "₹2.00 per delivered kWh", "₹4,422 gross annual owner value before degradation"],
            ["Regulated platform fee pool", "₹0.42 per delivered kWh", "₹929 per year across buyer + seller—not kWh revenue [2]"],
        ],
        [2500, 2470, 4390],
        font_size=9,
        header_fill=WARM,
    )
    add_paragraph(doc, "Illustrative assumptions are not a forecast. Actual value depends on tariff, feed-in compensation, solar surplus, loss factors, reserve, cycles, warranty and market rules.", size=9, color=SLATE, italic=True)

    doc.add_heading("Degradation is the economic gate", level=1)
    add_callout(doc, "Formula", "Degradation cost per delivered kWh = battery-attributable capital ÷ lifetime delivered kWh. The market spread must exceed this cost—or the dispatch must earn another value stream.", fill=WARM, border=HONEY, label_color=HONEY_D)
    add_data_table(
        doc,
        ["Illustrative battery capital", "Cycle-life assumption", "Lifetime delivered energy", "Degradation cost"],
        [
            ["₹1.50 lakh", "4,000 full-equivalent cycles", "~26,536 kWh", "~₹5.65 / delivered kWh"],
            ["₹2.50 lakh", "4,000 full-equivalent cycles", "~26,536 kWh", "~₹9.42 / delivered kWh"],
        ],
        [2200, 2350, 2350, 2460],
        font_size=9,
        header_fill=COOL,
    )
    add_paragraph(doc, "The ₹1.50 lakh and ₹2.50 lakh cases approximate Ola Shakti's launch and current published 9.1 kWh price points; 4,000 cycles and 90% efficiency are internal scenario assumptions, not Ola specifications. [9][10]", size=9, color=SLATE, italic=True)

    doc.add_heading("kWh recurring-revenue sensitivity", level=1)
    add_data_table(
        doc,
        ["Active devices", "₹199 / device / month", "₹299 / device / month", "Meaning"],
        [
            ["1,000", "₹23.9 lakh ARR", "₹35.9 lakh ARR", "Pilot-to-product stage"],
            ["10,000", "₹2.39 crore ARR", "₹3.59 crore ARR", "One scaled OEM or multi-channel fleet"],
            ["100,000", "₹23.88 crore ARR", "₹35.88 crore ARR", "National embedded distribution"],
        ],
        [1650, 2400, 2400, 2910],
        font_size=9,
        header_fill=MINT,
    )
    add_callout(doc, "Economic conclusion", "Use residential P2P to prove interoperability and OEM distribution. Seek the first material revenue in C&I/portfolio orchestration, where throughput, demand charges and grid value are larger.", fill=INDIGO, border=INDIGO_D, label_color=INDIGO_D)

    add_kicker(doc, "5 · Beachhead and go-to-market")
    add_title(doc, "Win Delhi; distribute through the OEM", size=22, after=7)

    doc.add_heading("Beachhead", level=1)
    add_data_table(
        doc,
        ["Dimension", "Choice", "Why"],
        [
            ["Regulatory territory", "TPDDL or BRPL, Delhi", "Renewable-charged BESS is explicit; 2026 P2P pilot orders are active. [1][2]"],
            ["Asset class", "Solar + 5–40 kWh storage", "Matches emerging residential/SMB portfolios and Delhi's ≤200 kW participant ceiling"],
            ["Commercial partner", "One authorised IES TSP", "Avoid building market matching and billing workflows already supplied by others. [3]"],
            ["OEM partner", "One open, motivated battery manufacturer", "A device profile creates a repeatable distribution path"],
            ["Buyer pool", "Residential + small commercial consumers", "Diverse load shapes create a better demonstration than households alone"],
        ],
        [1900, 3000, 4460],
        font_size=9,
        header_fill=MINT,
    )

    doc.add_heading("90-day pilot design", level=1)
    for text in [
        "Days 0–30 — integrate one OEM model in lab; establish device profile, safe controls, permissions and renewable-energy accounting.",
        "Days 31–60 — install 25–50 sites; connect TSP and DISCOM interfaces; establish solar-only baseline and owner reserve policy.",
        "Days 61–90 — submit day-ahead availability, execute accepted schedules, reconcile meter data and produce a regulator-ready result pack.",
    ]:
        add_list_item(doc, text, ordered=True, after=6)

    doc.add_heading("Pilot scorecard", level=1)
    add_data_table(
        doc,
        ["Metric", "Target / method", "Why it matters"],
        [
            ["Integration effort", "One reusable profile per model; no site-specific driver", "Proves compounding software economics"],
            ["Availability forecast", "Error tracked by time block and site", "Determines offer confidence"],
            ["Schedule fulfilment", "Battery cohort vs solar-only baseline", "Primary P2P value proof"],
            ["Control reliability", "≥95% acknowledged commands; exceptions explained", "DISCOM and OEM trust"],
            ["Reconciliation", "Target <2% gateway-to-boundary-meter variance", "Settlement credibility"],
            ["Net owner value", "Revenue/savings less losses, fees and degradation", "Prevents false-positive economics"],
            ["Safety / autonomy", "Zero reserve, warranty or thermal violations", "Licence to operate"],
        ],
        [2050, 3270, 4040],
        font_size=8.8,
        header_fill=COOL,
    )

    doc.add_heading("Sales sequence", level=1)
    add_rich_paragraph(doc, [
        ("1 · OEM technical sponsor", {"bold": True, "color": INDIGO_D}),
        (" → ", {"color": SLATE2}),
        ("2 · authorised TSP integration", {"bold": True, "color": INDIGO_D}),
        (" → ", {"color": SLATE2}),
        ("3 · DISCOM pilot approval", {"bold": True, "color": INDIGO_D}),
        (" → ", {"color": SLATE2}),
        ("4 · embedded commercial agreement", {"bold": True, "color": MINT_D}),
        (" → ", {"color": SLATE2}),
        ("5 · second OEM / second program", {"bold": True, "color": MINT_D}),
    ], after=6)

    add_kicker(doc, "6 · OEM and partner landscape")
    add_title(doc, "Targets are product ecosystems, not just cell companies", size=22, after=7)
    add_paragraph(doc, "“Tata cells” resolves into multiple relevant entities. The near-term product partner is Tata Power / TPREL's MySine and Battery Storage portfolio; Agratas is a cell-manufacturing platform and is not the immediate route to a P2P-ready end product.")

    add_data_table(
        doc,
        ["Target", "Public product signal", "Public control signal", "kWh opportunity", "Priority"],
        [
            ["Ola Shakti", "1.5, 5.2 and 9.1 kWh public configurations; 90% DoD; NMC 4680 cells [9][10]", "Wi‑Fi, 4G and app; no public market-control API found", "Add OEM-grade local interface, safe export and IES participation", "High — clear mass-market product, interface diligence required"],
            ["Tata Power / TPREL", "MySine LFP; 6,000+ cycles claimed; new 5–40 kWh residential and 60 kWh–5 MWh PowerHub families [11][12]", "Mobile monitoring; Tata also reports BESS observability and a P2P platform", "Partner on device standardisation or fill interoperability gaps outside the closed Tata stack", "High strategic value, harder channel conflict"],
            ["Amara Raja", "1 GWh lithium storage across ~50,000 telecom sites [13]", "Large distributed operational fleet; interfaces not public", "C&I/telecom fleet control and program participation", "High for scale; not residential-first"],
            ["Livguard", "Lithium X home hybrid ESS; remote monitoring and smart BMS [15]", "Remote monitoring advertised; market API not public", "Faster residential integration and channel test", "Medium-high"],
            ["Exide", "Large solar and residential backup channel; current public solar portfolio remains lead-acid heavy [14]", "No public dispatch API found", "Retrofit monitoring first; controlled cycling only where warranty supports it", "Medium; huge channel, weaker initial cycling fit"],
        ],
        [1350, 2500, 2050, 2180, 1280],
        font_size=8.1,
        header_fill=INDIGO,
    )

    doc.add_heading("Partner selection gates", level=1)
    for text in [
        "Local read/write interface documented (CAN, Modbus, SunSpec or supported gateway SDK).",
        "Grid-parallel export technically supported by the inverter and installation design.",
        "Warranty permits controlled cycling and exposes enough telemetry to enforce limits.",
        "OEM will allow signed third-party commands under explicit owner consent.",
        "A product leader has a reason to launch a market-ready differentiation within 6–9 months.",
    ]:
        add_list_item(doc, text, after=5)
    add_callout(doc, "Diligence rule", "App control is not equivalent to a safe market API. No external claim of compatibility until read/write control, export mode, warranty and certifications are verified on the exact SKU.", fill=WARM, border=HONEY, label_color=HONEY_D)

    add_kicker(doc, "7 · Technical and operating model")
    add_title(doc, "Control at the edge; authority stays explicit", size=22, after=7)

    doc.add_heading("Control hierarchy", level=1)
    add_data_table(
        doc,
        ["Priority", "Authority", "Rule"],
        [
            ["1", "Electrical protection / BMS", "Hard safety trip always wins"],
            ["2", "Owner reserve and opt-out", "Backup floor and manual override cannot be traded away"],
            ["3", "OEM warranty policy", "Temperature, current, power and cycle constraints enforced locally"],
            ["4", "DISCOM emergency / network instruction", "Curtail or disconnect within approved program rules"],
            ["5", "Accepted P2P / flexibility schedule", "Execute only inside the remaining safe envelope"],
            ["6", "Self-consumption / tariff optimisation", "Optimise residual flexibility"],
        ],
        [900, 3000, 5460],
        font_size=9,
        header_fill=MINT,
    )

    doc.add_heading("Minimum data contract", level=1)
    add_data_table(
        doc,
        ["Read", "Write", "Derived", "Audit"],
        [["Power, energy, SoC, SoH, voltage, current, temperature, alarms, connectivity", "Charge/discharge enable, active-power limit, mode, reserve, ramp rate", "Safe available kWh, renewable-attributed kWh, forecast, degradation proxy", "Command, policy version, consent, acknowledgement, exception, meter variance"]],
        [2400, 2260, 2350, 2350],
        font_size=8.8,
        header_fill=COOL,
    )

    doc.add_heading("Permission model", level=1)
    add_list_item(doc, "Owner grants purpose-limited access to named services and can revoke it.", after=5)
    add_list_item(doc, "The trading provider receives market availability and execution status—not unrestricted BMS control.", after=5)
    add_list_item(doc, "The DISCOM receives verified meter-linked performance and emergency authority defined by the program.", after=5)
    add_list_item(doc, "The OEM retains warranty policies and device-level safety authority.", after=5)
    add_list_item(doc, "kWh records the policy decision and local outcome for every command.", after=5)

    doc.add_heading("What must work without cloud connectivity", level=1)
    add_callout(doc, "Edge fallback", "Hold owner reserve, reject unsafe commands, complete or safely abort the active interval, buffer telemetry, and reconcile when connectivity returns.", fill=INDIGO, border=INDIGO_D, label_color=INDIGO_D)

    doc.add_heading("IES alignment", level=1)
    add_paragraph(doc, "Treat IES as the northbound trust and interoperability layer: verified participant/asset identity, consented data exchange, standard payloads and audit. Do not make IES—or any blockchain—the device safety controller. [4]")

    add_kicker(doc, "8 · 24-month execution plan")
    add_title(doc, "Prove one model, then make the library compound", size=22, after=7)
    add_data_table(
        doc,
        ["Phase", "Months", "Deliverables", "Commercial gate", "North-star KPI"],
        [
            ["0 · Partner lock", "0–2", "OEM technical sponsor, TSP partner, Delhi DISCOM path, exact SKU", "Signed pilot MoU / paid discovery", "One writable battery SKU"],
            ["1 · Integration", "2–5", "Device profile, policy engine, provenance, lab validation, pilot gateway", "OEM acceptance test", "Safe dispatch success"],
            ["2 · Live pilot", "5–8", "25–50 sites, baseline, schedules, reconciliation, result report", "Pilot converts to commercial programme", "Schedule fulfilment uplift"],
            ["3 · Productise", "8–14", "Installer tooling, fleet API, SLA, billing, second SKU", "Per-device recurring contract", "Active paid devices"],
            ["4 · Expand", "14–24", "Second OEM, C&I offer, second DISCOM/state, additional market service", "Portfolio/enterprise renewal", "MW under management"],
        ],
        [1300, 850, 3180, 2260, 1770],
        font_size=8.5,
        header_fill=MINT,
    )

    doc.add_heading("Team and spend priorities", level=1)
    add_data_table(
        doc,
        ["Workstream", "First capability", "Why first"],
        [
            ["Embedded / protocols", "CAN, Modbus, inverter/BMS profile tooling", "Unlocks the asset"],
            ["Controls / forecasting", "Safe envelope, reserve and available-energy forecast", "Determines reliable offers"],
            ["Utility integration", "IES/TSP adapter and meter reconciliation", "Unlocks settlement"],
            ["Field operations", "Installer workflow, monitoring and exception playbook", "Converts lab reliability into fleet reliability"],
            ["Regulatory / partnerships", "DISCOM and OEM responsibility matrix", "Prevents a technically valid but unlaunchable product"],
        ],
        [2000, 3500, 3860],
        font_size=8.9,
        header_fill=COOL,
    )

    doc.add_heading("KPI tree", level=1)
    add_rich_paragraph(doc, [
        ("North star: ", {"bold": True, "color": INDIGO_D}),
        ("dispatchable MW under management", {"bold": True}),
        ("  →  active paid devices  →  safe schedule-delivery rate  →  number of reusable device profiles  →  net value delivered per active asset.", {"color": SLATE}),
    ])

    add_kicker(doc, "9 · Risks, decisions and validation")
    add_title(doc, "What can break the thesis", size=22, after=7)
    add_data_table(
        doc,
        ["Risk", "Failure mode", "Mitigation / test", "Kill criterion"],
        [
            ["Battery economics", "Spread is below degradation and loss cost", "Model net incremental value by tariff and SKU; stack other services", "No positive use case after backup reserve and degradation"],
            ["OEM access", "Closed API or warranty blocks external control", "Start with local protocol and signed policy; target open sponsor", "No production read/write path on exact SKU"],
            ["Regulatory scope", "Battery not eligible or only solar energy may be traded", "Track energy provenance; launch in Delhi; keep P2P one app", "No regulator/DISCOM path to a live battery dispatch"],
            ["DISCOM value", "Utility sees revenue erosion or operational risk", "Measure peak, schedule and local-grid value; give DISCOM control", "Pilot cannot name a utility-side economic benefit"],
            ["TSP commoditisation", "Trading provider bundles device control", "Remain multi-platform and build deep OEM/profile library", "TSP controls OEM interface and makes kWh redundant"],
            ["Safety / cyber", "Unsafe or unauthorised dispatch", "Edge hierarchy, signed commands, least privilege, immutable audit", "Any unexplained reserve, thermal or permission violation"],
        ],
        [1500, 2500, 3370, 1990],
        font_size=8.3,
        header_fill=WARM,
    )

    doc.add_heading("Founder decisions required", level=1)
    for text in [
        "Choose the first commercial focus: residential OEM distribution or C&I portfolio value. Recommendation: residential for proof, C&I for first material revenue.",
        "Confirm whether the ~₹6,000 Model A price is hardware only, or hardware plus software activation and connectivity.",
        "Choose kWh's control-authority stance: direct dispatch under OEM permission, or recommendation-only for the first pilot.",
        "Select the first target OEM based on interface openness—not brand size.",
        "Decide whether kWh will register as a trading service provider later. Recommendation: remain infrastructure-neutral through the first two pilots.",
    ]:
        add_list_item(doc, text, after=5)

    doc.add_heading("Next 30 days", level=1)
    add_data_table(
        doc,
        ["Action", "Output", "Owner / proof"],
        [
            ["OEM diligence", "Exact SKU interface, export mode, warranty and cycle policy for Ola Shakti, MySine/TP Battery Storage and one open alternative", "Three technical calls + written interface evidence"],
            ["TSP diligence", "Select one authorised provider and map its schedule, API and settlement contract", "Sandbox or API session"],
            ["DISCOM diligence", "Confirm battery eligibility, meter interval, baseline and pilot approval route", "Written pilot responsibility matrix"],
            ["Value model", "Tariff × solar × battery × degradation scenario calculator", "Three viable site archetypes"],
            ["Pilot pack", "Architecture, SOW, safety case, data contract and scorecard", "Partner-ready proposal"],
        ],
        [2000, 4840, 2520],
        font_size=8.7,
        header_fill=MINT,
    )
    add_callout(doc, "Go / no-go gate", "Proceed to product build only when one exact battery SKU is writable, one authorised market partner will consume the API, and one DISCOM confirms a live settlement path.", fill=INDIGO, border=INDIGO_D, label_color=INDIGO_D)

    page_break(doc)
    add_kicker(doc, "Appendix · evidence and assumptions")
    add_title(doc, "Source register", size=22, after=7)
    add_paragraph(doc, "This is a working business model, not legal, regulatory or investment advice. Planning ranges are hypotheses for partner discovery. Public pilot metrics have been conservatively labelled where source units conflict.", size=9.5, color=SLATE, italic=True)
    add_source_list(doc, list(range(1, 18)), heading="Primary and analytical sources", compact=False)
    doc.add_heading("Research companion", level=2)
    add_paragraph(doc, "Full pilot chronology, regulatory mechanics, caveats and recommended beachhead: research/p2p-trading-india-pilots.md", size=9.5, color=SLATE)

    path = EXPORTS / "kWh-Electric-P2P-Business-Model-Internal.docx"
    doc.save(path)
    return path


if __name__ == "__main__":
    EXPORTS.mkdir(parents=True, exist_ok=True)
    intro = build_intro()
    internal = build_internal_model()
    print(intro)
    print(internal)
